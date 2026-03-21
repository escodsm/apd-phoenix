<script lang="ts">
  import Contact from '$lib/components/Contact.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import type { BlogPostSummary } from '$lib/server/blog';

  let { data }: { data: { posts: BlogPostSummary[] } } = $props();
</script>

<div class="header-wrapper">
  <Hero />
  <NavBar />
</div>

<section class="section blog" id="blog">
  <div class="container">
    <h2>Blog</h2>
    <div class="blog-layout">
      <div class="blog-intro">
        <p>
          This section is where I publish short technical write-ups, implementation notes, general articles, and lessons learned from current product work.
        </p>
      </div>

      <div class="blog-grid">
        {#each data.posts as post}
          <article class="blog-card">
            <div class="blog-card-tag">{post.formattedDate}</div>
            <h3>{post.title}</h3>
            <p class="blog-card-meta">{post.readingTime} min read</p>
            <p>{post.excerpt}</p>
            <a class="blog-card-link" href={`/blog/${post.slug}`}>Read More</a>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<Contact />