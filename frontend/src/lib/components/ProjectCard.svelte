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
        {#if item.type === 'image'}
          <img src={item.src} alt={item.alt ?? ''} width="320" height="240" />
        {:else if item.type === 'image_wide'}
          <img src={item.src} alt={item.alt ?? ''} width="664" height="240" />
          {:else if item.type === 'image_tall'}
          <img src={item.src} alt={item.alt ?? ''} width="531" height="944" />
        {/if}
      {/each}
    </div>
  {/if}
</div>