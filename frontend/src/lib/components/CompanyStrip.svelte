<script>
  const companies = [
    { name: "Tegna", file: "src/lib/assets/logos/tegnaLogo.png" },
    { name: "IGT", file: "src/lib/assets/logos/BrightstarLogo.png" },
    { name: "Mercedes-Benz", file: "src/lib/assets/logos/benzLogo.png" },
    { name: "Altria", file: "src/lib/assets/logos/altriaLogo.png" },
    { name: "Rockwell Automation", file: "src/lib/assets/logos/rockwellLogo.png" }
  ];
</script>

<section class="company-strip">
  <div class="divider"></div>

  <div class="logo-row">
    {#each companies as company}
      <img src={company.file} alt={company.name} />
    {/each}
  </div>

  <div class="divider"></div>
</section>

<style>
  .company-strip {
    width: 100%;
    margin: 80px 0;
  }

  .divider {
    height: 2px;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      #d4af37,
      transparent
    );
    opacity: 0.6;
  }

  .logo-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    gap: 40px;
    flex-wrap: wrap;
  }

  .logo-row img {
    max-height: 65px;
    opacity: 0.75;
    filter: grayscale(100%) brightness(1.8);
    transition: opacity 0.3s ease, filter 0.3s ease;
  }

  .logo-row img:hover {
    opacity: 0.9;
    filter: grayscale(0%) brightness(1);
  }

  @media (max-width: 900px) {
    .logo-row {
      justify-content: center;
      gap: 30px;
    }

    .logo-row img {
      max-height: 36px;
    }
  }
</style>