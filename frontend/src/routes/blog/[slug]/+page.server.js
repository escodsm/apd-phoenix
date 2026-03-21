import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/server/blog';

export async function load({ params }) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}