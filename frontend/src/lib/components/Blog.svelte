<script lang="ts">
  export let sectionId = 'blog';
  export let title = 'Blog';

  const posts = [
    {
      tag: 'In Progress',
      heading: 'Practical AI For Real-World Diagnostics',
      summary:
        'How I built a VIN-based diagnostic assistant with React Native + Supabase. A look at the architecture, data pipeline, and lessons learned from integrating LLMs into a mobile workflow for automotive diagnostics.',
      href: '/blog/practical-ai-real-world-diagnostics'
    },
    {
      tag: 'WrenchIQ',
      heading: 'Car won’t start? 5 likely causes (before you call a mechanic)',
      summary:
        'In a preview of what is available in the WrenchIQ app, here are five things to check if your car won’t start, based on common issues I’ve seen in automotive diagnostics work; quick checks you can do yourself before needing to call a mechanic.',
      href: '/blog/car-wont-start-five-likely-causes'
    },
    {
      tag: 'Automation',
      heading: 'Bridging Software And Operational Reality',
      summary:
        'Thoughts on designing systems where mobile, APIs, simulation, and automation all need to align with real-world workflows, constraints, and the importance of building with practical utility and reliability in mind.',
      href: '/blog/bridging-software-and-operational-reality'
    }
  ];
</script>

<section class="section blog" id={sectionId}>
  <div class="container">
    <h2>{title}</h2>
    <div class="blog-layout">
      <div class="blog-intro">
        <p>
          This section is where I publish short technical write-ups, implementation notes, reflections, and lessons learned from current product work.
        </p>
      </div>

      <div class="blog-grid">
        {#each posts as post}
          <article class="blog-card">
            <div class="blog-card-tag">{post.tag}</div>
            <h3>{post.heading}</h3>
            <p>{post.summary}</p>
            <a class="blog-card-link" href={post.href}>Read More</a>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>