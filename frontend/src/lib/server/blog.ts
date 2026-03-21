import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogDirectory = join(process.cwd(), 'src', 'lib', 'blog');

type BlogFrontmatter = {
	title: string;
	date: string;
	slug: string;
};

export type BlogPostSummary = BlogFrontmatter & {
	excerpt: string;
	readingTime: number;
	formattedDate: string;
};

export type BlogPost = BlogPostSummary & {
	html: string;
	content: string;
};

function assertFrontmatter(data: unknown, fileName: string): asserts data is BlogFrontmatter {
	if (!data || typeof data !== 'object') {
		throw new Error(`Invalid frontmatter in ${fileName}`);
	}

	const { title, date, slug } = data as Record<string, unknown>;

	if (typeof title !== 'string' || typeof date !== 'string' || typeof slug !== 'string') {
		throw new Error(`Missing required frontmatter fields in ${fileName}`);
	}
	}

function stripMarkdown(markdown: string) {
	return markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[[^\]]+\]\([^)]*\)/g, '$1')
		.replace(/[>#*_~-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function getExcerpt(markdown: string) {
	const plainText = stripMarkdown(markdown);

	if (plainText.length <= 180) {
		return plainText;
	}

	return `${plainText.slice(0, 177).trimEnd()}...`;
}

function getReadingTime(markdown: string) {
	const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(date: string) {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long'
	}).format(new Date(date));
}

async function parsePostFile(fileName: string) {
	const filePath = join(blogDirectory, fileName);
	const fileContents = await readFile(filePath, 'utf-8');
	const { data, content } = matter(fileContents);

	assertFrontmatter(data, fileName);

	const excerpt = getExcerpt(content);
	const readingTime = getReadingTime(content);
	const formattedDate = formatDate(data.date);

	return {
		...data,
		content,
		excerpt,
		readingTime,
		formattedDate
	};
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
	const entries = await readdir(blogDirectory, { withFileTypes: true });
	const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));
	const posts = await Promise.all(markdownFiles.map((entry) => parsePostFile(entry.name)));

	return posts
		.sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
		.map(({ content, ...post }) => post);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	const entries = await readdir(blogDirectory, { withFileTypes: true });
	const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

	for (const entry of markdownFiles) {
		const post = await parsePostFile(entry.name);

		if (post.slug === slug) {
			return {
				...post,
				html: await marked.parse(post.content)
			};
		}
	}

	return null;
}