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

            <div class="project-details">
              {#if item.linkUrl}
                <p class="project-link-wrap">
                  <a class="project-link" href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                    {item.linkLabel ?? item.linkUrl}
                  </a>
                </p>
              {/if}
              <p class="project-detail"><strong>Description:</strong> {item.description}</p>
              <p class="project-detail"><strong>Solution:</strong> {item.solution}</p>
              <p class="project-detail"><strong>Impact:</strong> {item.impact}</p>
              <p class="project-detail"><strong>Tech Stack:</strong> {item.techStack}</p>
            </div>

          </div>
        {/each}
      </div>
    {/if}

  </div>
</div>