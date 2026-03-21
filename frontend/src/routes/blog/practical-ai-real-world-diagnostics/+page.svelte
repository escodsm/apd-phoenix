<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import BlogPostPage from '$lib/components/BlogPostPage.svelte';
</script>

<div class="header-wrapper">
  <Hero />
  <NavBar />
</div>

<BlogPostPage
  tag="In Progress"
  title="Practical AI For Real-World Diagnostics"
  published="Published March 2026"
  intro="Building AI-enabled diagnostics is less about novelty and more about trust, speed, and practical outcomes in the field."
  sections={[
    {
      heading: 'Product Direction',
      body: 'The goal is to reduce ambiguity during troubleshooting. Instead of generic chat responses, the experience is anchored around VIN context, symptom-specific flow, and clear next actions.'
    },
    {
      heading: 'System Design',
      body: 'The stack combines React Native for guided mobile UX, Supabase for data and auth, and a constrained AI layer for explanation and recommendation. The app prioritizes deterministic checks before probabilistic AI suggestions.'
    },
    {
      heading: 'What Matters Most',
      body: 'Reliability beats cleverness. The strongest outcomes come from transparent diagnostics, clean telemetry, and UX that helps users make better decisions under time pressure.'
    }
  ]}
/>

<Contact />