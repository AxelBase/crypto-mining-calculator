<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Mining Calculator</title>
  <meta name="description" content="This static, client-side mining profitability calculator collects no personal data, ensuring complete privacy for all users." />
  <meta property="og:title" content="Privacy Policy | Crypto Mining Calculator" />
  <meta property="og:description" content="This static, client-side mining profitability calculator collects no personal data, ensuring complete privacy for all users." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 15, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Mining Calculator</strong>, a simple, fully client-side web utility designed to help users estimate cryptocurrency mining profitability. This tool runs entirely in your browser with <em>no server interaction</em>. We prioritize your privacy by ensuring that <strong>no personal data is collected, stored, or transmitted</strong> at any time. This Privacy Policy outlines our commitment to data protection and explains our practices in detail.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>As a static application, the Crypto Mining Calculator does not gather any information from users. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: No names, email addresses, or contact details are requested or stored.</li>
      <li><strong>Usage or Analytics Data</strong>: No IP addresses, browser types, device information, or location data is logged.</li>
      <li><strong>Input Data</strong>: Values entered for hash rate, difficulty, block reward, coin price, power consumption, or electricity cost remain strictly on your device.</li>
      <li><strong>Tracking Data</strong>: No cookies, pixels, or similar technologies are used to monitor activity.</li>
    </ul>
    <p>All calculations occur locally using JavaScript, ensuring your inputs never leave your browser.</p>

    <h2>3. How the Tool Operates</h2>
    <p>The calculator processes inputs client-side:</p>
    <ul>
      <li><strong>Local Computation</strong>: Profit estimates are generated instantly in the browser without external requests.</li>
      <li><strong>No Persistence</strong>: Data is not saved across sessions unless you manually use browser features.</li>
      <li><strong>Static Hosting</strong>: Deployed on platforms like GitHub Pages, there is no backend to receive or store information.</li>
    </ul>
    <p>This design provides <em>complete privacy and offline capability</em> after initial load.</p>

    <h2>4. Third-Party Services</h2>
    <p>We include Bootstrap via CDN for styling and layout. These resources are widely used and do not enable user tracking in this context. No analytics providers, advertising networks, or data-sharing services are integrated.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>The tool is <strong>completely stateless</strong> and does not use cookies, localStorage for persistence, or any tracking mechanisms.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is collected, there are no servers to breach. Users should maintain their own device security and use trusted networks.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not intended for children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. International Compliance</h2>
    <p>Our no-collection approach complies with privacy regulations worldwide, including <strong>GDPR</strong> and <strong>CCPA</strong>.</p>

    <h2>9. Policy Changes</h2>
    <p>Updates to this policy will be posted here with a revised effective date.</p>

    <h2>10. Contact</h2>
    <p>For questions, refer to the project's repository or associated channels.</p>

    <p class="italic-note">Your privacy is fundamental—<strong>no data means no risks</strong>. Thank you for using our tool responsibly.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
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
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>