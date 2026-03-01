<script lang="ts">
  import { projects } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';
</script>

<section class="section section--dark" id="projects">
  <div class="container">
  <h2>Work Highlights</h2>

  {#each projects as project}
    <ProjectCard {project} />
  {/each}
  </div>
</section>