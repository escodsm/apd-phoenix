<script>
  import { onMount } from "svelte";
  import { fade, fly, slide, scale, blur, crossfade } from "svelte/transition";

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 50);
  });
</script>
<section class="section about" id="about">
 <div class="container">
        {#if show}
        <div class="about-tech-label-title" in:fly={{ y: 16, duration: 450, delay: 100 }}>
        ENGINEERING WITH INTENT
        </div>
        {/if}
      <div class="about-layout">

      <!-- LEFT COLUMN -->
       {#if show}
        <div class="about-text" in:fade={{ duration: 450, delay: 200 }}>
            <p>
            We engineer solutions that bridge software, simulation, and real-world operations. From IIoT manufacturing systems to AR training 
            applications and full-stack web platforms, we focus on building tools that are technically sound and operationally meaningful.

            With 15+ years in development and technical systems design, we bring clarity to complexity — and ship work that performs.
            </p>
        </div>
        {/if}
      <!-- RIGHT COLUMN -->
        <div class="about-tech-wrapper">
            {#if show}
            <div class="about-tech-label" in:fly={{ y: 16, duration: 450, delay: 600 }}>Core Stack</div>
            {/if}
            {#if show}
            <div class="about-tech" in:fly={{ y: 16, duration: 450, delay: 900 }}>
            
                <div class="tech-item" in:fade={{ duration: 450, delay: 1000 }}>
                    <i class="devicon-csharp-plain" ></i>
                    <span>C# / .NET</span>
                </div>

                <div class="tech-item" in:fade={{ duration: 450, delay: 1050 }}>
                    <i class="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                </div>
                
                <div class="tech-item" in:fade={{ duration: 450, delay: 1100 }}>
                    <i class="devicon-svelte-plain"></i>
                    <span>Svelte</span>
                </div>

                <div class="tech-item" in:fade={{ duration: 450, delay: 1150 }}>
                    <i class="devicon-azure-plain"></i>
                    <span>Azure</span>
                </div>

                <div class="tech-item" in:fade={{ duration: 450, delay: 1200 }}>
                    <i class="devicon-git-plain"></i>
                    <span>Git</span>
                </div>

                <div class="tech-item" in:fade={{ duration: 450, delay: 1250 }}>
                    <i class="devicon-mysql-plain"></i>
                    <span>SQL</span>
                </div>
            
        </div>
        {/if}
      </div><!--about tech wrapper-->
    </div><!--about layout-->
   </div><!--container-->
  
</section>