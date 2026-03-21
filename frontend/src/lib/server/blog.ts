import matter from 'gray-matter';
import { marked } from 'marked';

const blogModules = import.meta.glob('../blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

type BlogFrontmatter = {
	title: string;
	date: string;
	slug: string;
};

type RawBlogFrontmatter = {
	title: unknown;
	date: unknown;
	slug: unknown;
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

function assertFrontmatter(data: unknown, fileName: string): asserts data is RawBlogFrontmatter {
	if (!data || typeof data !== 'object') {
		throw new Error(`Invalid frontmatter in ${fileName}`);
	}

	const { title, date, slug } = data as Record<string, unknown>;

	const hasValidDate = typeof date === 'string' || date instanceof Date;

	if (typeof title !== 'string' || !hasValidDate || typeof slug !== 'string') {
		throw new Error(`Missing required frontmatter fields in ${fileName}`);
	}
}

function normalizeDate(date: string | Date) {
	return date instanceof Date ? date.toISOString() : date;
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
	const filePath = Object.keys(blogModules).find((path) => path.endsWith(`/${fileName}`));

	if (!filePath) {
		throw new Error(`Blog post file not found: ${fileName}`);
	}

	const fileContents = blogModules[filePath];
	const { data, content } = matter(fileContents);

	assertFrontmatter(data, fileName);
	const frontmatterData = data as RawBlogFrontmatter;

	const frontmatter: BlogFrontmatter = {
		title: frontmatterData.title as string,
		date: normalizeDate(frontmatterData.date as string | Date),
		slug: frontmatterData.slug as string
	};

	const excerpt = getExcerpt(content);
	const readingTime = getReadingTime(content);
	const formattedDate = formatDate(frontmatter.date);

	return {
		...frontmatter,
		content,
		excerpt,
		readingTime,
		formattedDate
	};
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
	const markdownFiles = Object.keys(blogModules)
		.filter((path) => path.endsWith('.md'))
		.map((path) => path.split('/').pop())
		.filter((fileName): fileName is string => Boolean(fileName));
	const posts = await Promise.all(markdownFiles.map((fileName) => parsePostFile(fileName)));

	return posts
		.sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
		.map(({ content, ...post }) => post);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	const markdownFiles = Object.keys(blogModules)
		.filter((path) => path.endsWith('.md'))
		.map((path) => path.split('/').pop())
		.filter((fileName): fileName is string => Boolean(fileName));

	for (const fileName of markdownFiles) {
		const post = await parsePostFile(fileName);

		if (post.slug === slug) {
			return {
				...post,
				html: await marked.parse(post.content)
			};
		}
	}

	return null;
}