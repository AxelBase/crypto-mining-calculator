<!-- src/routes/+error.svelte (SvelteKit 404 and error page) -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>404 — Page Not Found | Crypto Mining Calculator</title>
  <meta name="description" content="The requested page could not be found. Return to the Crypto Mining Calculator home page to estimate mining profitability." />
  <meta property="og:title" content="404 — Page Not Found | Crypto Mining Calculator" />
  <meta property="og:description" content="The requested page could not be found. Return to the Crypto Mining Calculator home page to estimate mining profitability." />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>404 Not Found</p>
  </div>

  <article class="prose text-center">
    <h1>404 — Page Not Found</h1>

    <p class="post-meta">Last Updated: December 15, 2025</p>

    <p>Oops! The page you're looking for doesn't exist. It might have been moved, renamed, or is temporarily unavailable. Don't worry — the Crypto Mining Calculator is still ready to help you estimate profitability.</p>

    <p>You can return to the main tool or explore other sections using the links below.</p>

    <h2>Quick Links</h2>
    <ul class="list-unstyled d-inline-block text-start">
      <li><a href="{base}/">← Home / Calculator</a></li>
      <li><a href="{base}/blog">Blog – Insights & Guides</a></li>
      <li><a href="{base}/privacy">Privacy Policy</a></li>
      <li><a href="{base}/terms">Terms and Conditions</a></li>
    </ul>

    <h2>Need Help?</h2>
    <p>If you arrived here via a broken link or believe this is an error, try refreshing the page or clearing your browser cache. For broken links from external sites, feel free to report them via the project repository.</p>

    <p>The calculator itself remains fully functional and privacy-focused — all processing happens in your browser with no data collection.</p>

    <p class="italic-note"><strong>Mine smarter, not harder.</strong> Accurate estimates start with the right inputs.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #6c757d;
  }
  .breadcrumbs a {
    color: #0d6efd;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: #0d6efd;
  }

  .prose h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .prose h2 {
    margin-top: 3rem;
  }

  .prose p {
    color: #212529;
    font-size: 1.1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .prose ul {
    list-style-type: none;
    padding-left: 0;
  }

  .prose ul li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .prose ul li a {
    color: #0d6efd;
    text-decoration: none;
    font-weight: 500;
  }

  .prose ul li a:hover {
    text-decoration: underline;
  }

  .prose .italic-note {
    font-style: italic;
    color: #6c757d;
    text-align: center;
    margin-top: 4rem;
    font-size: 1.1rem;
  }
</style>