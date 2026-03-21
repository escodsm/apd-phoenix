<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const items = [
    { label: "Main", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  let show = false;
  let menuOpen = false;
  let activeSection: string = "main";

  const toggleMenu = () => (menuOpen = !menuOpen);
  const closeMenu = () => (menuOpen = false);

  function goToSection(id: string) {
    const isHomePage = $page.url.pathname === '/';
    const el = document.getElementById(id);

    if (isHomePage && el) {
      el.scrollIntoView({ behavior: "smooth" });
      activeSection = id;
    } else {
      goto(`/#${id}`);
    }

    closeMenu();
  }

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
  });
</script>

{#if show}
  <nav class="main-nav" in:slide={{ duration: 500, easing: (t) => t }}>
    <div class="nav-container">

      <button
        type="button"
        class="hamburger"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        on:click={toggleMenu}
      >
        {#if menuOpen}✕{:else}☰{/if}
      </button>

      <div class="nav-items" class:open={menuOpen}>
        {#each items as item}
          <button
            type="button"
            class="nav-link"
            class:active={activeSection === item.id}
            on:click={() => goToSection(item.id)}
          >
            {item.label}
          </button>
        {/each}
      </div>

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
    z-index: 900;
  }

  .nav-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: relative;
  }

  .nav-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 18px;
  }

  .hamburger {
    display: none;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 22px;
    color: #111;
    cursor: pointer;
    padding: 6px 10px;
    line-height: 1;
  }

  .nav-link {
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    transition: transform 0.25s ease, opacity 0.2s ease;
    opacity: 0.7;
  }

  .nav-link:hover {
    transform: translateY(-2px);
    opacity: 1;
  }

  /* ACTIVE NAV ITEM */
  .nav-link.active {
    opacity: 1;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .nav-items {
      position: absolute;
      top: 50px;
      right: 20px;
      width: min(240px, calc(100vw - 40px));
      background: #d4af37;
      border-radius: 10px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: 0.2s ease;
      z-index: 1000;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    }

    .nav-items.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .nav-link {
      width: 100%;
      text-align: left;
      padding: 8px 6px;
    }
  }
</style>