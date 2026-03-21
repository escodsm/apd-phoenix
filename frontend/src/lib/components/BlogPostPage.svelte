<script lang="ts">
  export let title: string;
  export let tag = 'Blog';
  export let intro: string;
  export let published = 'Published 2026';
  export let sections: { heading: string; body: string }[] = [];
</script>

<section class="section blog-post" id="blog">
  <div class="container">
    <div class="blog-post-tag">{tag}</div>
    <h2>{title}</h2>
    <p class="blog-post-meta">{published}</p>
    <p class="blog-post-intro">{intro}</p>

    <div class="blog-post-body">
      {#each sections as section}
        <article>
          <h3>{section.heading}</h3>
          <p>{section.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>