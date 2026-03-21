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
              <div class="tech-group" in:fade={{ duration: 450, delay: 1000 }}>
                <div class="tech-group-label">Platform</div>
                <div class="tech-grid">
                  <div class="tech-item" aria-label="C# / .NET" title="C# / .NET">
                    <i class="devicon-csharp-plain"></i>
                  </div>
                  <div class="tech-item" aria-label="Azure" title="Azure">
                    <i class="devicon-azure-plain"></i>
                  </div>
                  <div class="tech-item" aria-label="Azure SQL Database" title="Azure SQL Database">
                    <i class="devicon-azuresqldatabase-plain"></i>
                  </div>
                </div>
              </div>

              <div class="tech-group" in:fade={{ duration: 450, delay: 1080 }}>
                <div class="tech-group-label">Web</div>
                <div class="tech-grid">
                  <div class="tech-item" aria-label="JavaScript" title="JavaScript">
                    <i class="devicon-javascript-plain"></i>
                  </div>
                  <div class="tech-item" aria-label="Svelte" title="Svelte">
                    <i class="devicon-svelte-plain"></i>
                  </div>
                  <div class="tech-item" aria-label="Supabase" title="Supabase">
                    <i class="devicon-supabase-plain"></i>
                  </div>
                </div>
              </div>

              <div class="tech-group" in:fade={{ duration: 450, delay: 1160 }}>
                <div class="tech-group-label">Mobile</div>
                <div class="tech-grid">
                  <div class="tech-item" aria-label="React Native" title="React Native">
                    <i class="devicon-reactnative-original"></i>
                  </div>
                  <div class="tech-item" aria-label="Expo" title="Expo">
                    <i class="devicon-expo-plain"></i>
                  </div>
                </div>
              </div>

              <div class="tech-group" in:fade={{ duration: 450, delay: 1240 }}>
                <div class="tech-group-label">Design and API</div>
                <div class="tech-grid">
                  <div class="tech-item" aria-label="Figma" title="Figma">
                    <i class="devicon-figma-plain"></i>
                  </div>
                  <div class="tech-item" aria-label="Postman" title="Postman">
                    <i class="devicon-postman-plain"></i>
                  </div>
                </div>
              </div>
            
        </div>
        {/if}
      </div><!--about tech wrapper-->
    </div><!--about layout-->
   </div><!--container-->
  
</section>