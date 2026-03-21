<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import type { BlogPost } from '$lib/server/blog';

	let { data }: { data: { post: BlogPost } } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="header-wrapper">
	<Hero />
	<NavBar />
</div>

<section class="section blog-post" id="blog">
	<div class="container">
		<div class="blog-post-tag">{data.post.formattedDate}</div>
		<h2>{data.post.title}</h2>
		<p class="blog-post-meta">{data.post.readingTime} min read</p>

		<article class="blog-markdown">
			{@html data.post.html}
		</article>
	</div>
</section>

<Contact />