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
  tag="Automation"
  title="Bridging Software And Operational Reality"
  published="Published March 2026"
  intro="Production software succeeds when it respects operational constraints, not when it ignores them."
  sections={[
    {
      heading: 'Context Is A Feature',
      body: 'Systems used in the field need role-specific context, not generic dashboards. Operators, engineers, and support teams require different views of the same workflow.'
    },
    {
      heading: 'Interfaces Over Silos',
      body: 'Mobile clients, APIs, simulation tooling, and operational telemetry should be designed as one system. Integration strategy is often more important than individual framework choice.'
    },
    {
      heading: 'Measure For Reliability',
      body: 'Uptime alone is not enough. The better metric is whether teams can detect issues early, understand root cause quickly, and recover with confidence.'
    }
  ]}
/>

<Contact />