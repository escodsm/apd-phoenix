<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import About from '$lib/components/About.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import CompanyStrip from '$lib/components/CompanyStrip.svelte';
  import Blog from '$lib/components/Blog.svelte';
  import Contact from '$lib/components/Contact.svelte';

</script>

<div class="header-wrapper">
  <Hero />
  <NavBar />
</div>

<About />
<CompanyStrip />
<Projects />
<Blog />
<Contact />