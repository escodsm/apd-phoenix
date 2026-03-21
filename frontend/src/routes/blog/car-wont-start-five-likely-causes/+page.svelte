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
  tag="WrenchIQ"
  title="Car won’t start? 5 likely causes (before you call a mechanic)"
  published="Published March 2026"
  intro="Most no-start situations follow a handful of repeat patterns. A quick structured check can save both time and unnecessary towing."
  sections={[
    {
      heading: 'Battery and Terminals',
      body: 'A weak battery or corroded terminals is still the most common root cause. Check terminal tightness, visible corrosion, and whether accessories dim during crank.'
    },
    {
      heading: 'Starter vs Fuel vs Spark',
      body: 'No crank usually points toward battery/starter path. Crank-no-start often shifts focus to fuel delivery or spark. Distinguishing these early avoids random part swaps.'
    },
    {
      heading: 'Diagnostic Discipline',
      body: 'Record symptoms in order, run quick objective checks first, and escalate only after you isolate the subsystem. Reliable troubleshooting is mostly about sequence.'
    }
  ]}
/>

<Contact />