<script lang="ts">
  import type { Project } from '$lib/data/projects';

  export let project: Project;

  $: isEvenProject = project.id % 2 === 0;
</script>

<div class="project" class:project--reverse={isEvenProject}>
  <h3>{project.title}</h3>

  <div class="project-layout">

    {#if project.media}
      <div class="pcenter">
        {#each project.media as item}
          <div class="media-row" class:media-row--reverse={isEvenProject}>

            {#if item.type === 'image'}
              <img src={item.src} alt={item.alt ?? ''} class="project-image" />
            {:else if item.type === 'image_wide'}
              <img src={item.src} alt={item.alt ?? ''} class="project-image image-wide" />
            {:else if item.type === 'image_tall'}
              <img src={item.src} alt={item.alt ?? ''} class="project-image image-tall" />
            {/if}

            <p class="project-description">{item.description}</p>

          </div>
        {/each}
      </div>
    {/if}

  </div>
</div>