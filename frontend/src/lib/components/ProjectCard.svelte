<script lang="ts">
  import type { Project } from '$lib/data/projects';

  export let project: Project;
</script>

<div class="project">
  <h3>{project.title}</h3>
  <p>{project.description}</p>

  {#if project.media}
    <div class="pcenter">
      {#each project.media as item}
        {#if item.type === 'video'}
          <video width="320" height="240" controls muted poster={item.poster}>
            <source src={item.src} type="video/mp4" />
          </video>
        {:else if item.type === 'image'}
          <img src={item.src} alt={item.alt ?? ''} width="320" height="240" />
        {:else if item.type === "youtube"}
        <iframe
          width="560"
          height="315"
          src={item.src}
          title={item.alt}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        {/if}
      {/each}
    </div>
  {/if}
</div>