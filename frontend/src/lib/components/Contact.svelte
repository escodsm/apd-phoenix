<script lang="ts">
  export let sectionId = 'contact';
  export let title = 'Contact';
</script>

<section class="section contact" id={sectionId}>
  <div class="container">
    <h2>{title}</h2>
    <div class="contact-layout">
      <p>
        I am available for consulting, product collaboration, and engineering work.
      </p>
      <p class="contact-line">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 .42v.03l7 5.6 7-5.6v-.03a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.59-6.37 5.1a1 1 0 0 1-1.26 0L5 8.51V18.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V8.51Z" fill="currentColor" />
          </svg>
        </span>
        <a href="mailto:steve@anchorpointdigital.design">steve@anchorpointdigital.design</a>
      </p>
      <p class="contact-line">
        <i class="devicon-linkedin-plain contact-icon contact-icon--linkedin" aria-hidden="true"></i>
        <a href="https://www.linkedin.com/in/stevecordeiro/" target="_blank" rel="noopener noreferrer">linkedin.com/in/stevecordeiro/</a>
      </p>
    </div>
  </div>
</section>