<script>
  import { onMount } from "svelte";
  import { fade, fly, slide, scale, blur, crossfade } from "svelte/transition";

  const items = [
    "Main",
    "Projects",
    "Software",
    "IIoT",
    "Blog",
    "Contact"
  ];

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 100); // slightly faster feels better
  });
</script>

{#if show}
  <nav
    class="main-nav"
    in:slide={{ duration: 500, easing: t => t }}
  >
    <div class="nav-container">
      {#each items as item}
        <button>{item}</button>
      {/each}
    </div>
  </nav>
{/if}

<style>
  .main-nav {
    height: 50px;
    width: 100%;
    background: linear-gradient(
      90deg,
      #8f6b2e,
      #b9923f,
      #d4af37,
      #b9923f,
      #8f6b2e
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 900; /* lower than hero */
  }

  .nav-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    transition: 0.25s ease;
  }

  button:hover {
    transform: translateY(-2px);
  }
</style>