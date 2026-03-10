<script lang="ts">
  import type { Project } from '$lib/data/projects';

  export let project: Project;
</script>

<div class="project">
  <h3>{project.title}</h3>

  <div class="project-layout">

    {#if project.media}
      <div class="pcenter">
        {#each project.media as item}
          {#if item.type === 'image'}
            <img src={item.src} alt={item.alt ?? ''} width="320" height="240" />
          {:else if item.type === 'image_wide'}
            <img src={item.src} alt={item.alt ?? ''} width="447" height="240" />
          {:else if item.type === 'image_tall'}
            <img src={item.src} alt={item.alt ?? ''} width="281" height="500" />
          {/if}
        {/each}
      </div>
    {/if}

    <p class="project-description">{project.description}</p>

  </div>
</div>