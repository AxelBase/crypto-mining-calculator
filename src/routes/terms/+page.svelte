<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Mining Calculator</title>
  <meta name="description" content="Read the terms of use for this client-side cryptocurrency mining profitability estimator, including disclaimers on accuracy and liability." />
  <meta property="og:title" content="Terms and Conditions | Crypto Mining Calculator" />
  <meta property="og:description" content="Read the terms of use for this client-side cryptocurrency mining profitability estimator, including disclaimers on accuracy and liability." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 15, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Mining Calculator</strong> ("the Tool"), a static web utility for estimating mining profitability, you agree to these Terms and Conditions. If you do not agree, please refrain from using the Tool.</p>

    <h2>2. Description of the Tool</h2>
    <p>The Tool is a client-side application that calculates estimated daily, weekly, and monthly profits based on user-provided inputs such as hash rate, network difficulty, block reward, coin price, power consumption, and electricity cost. It uses simplified Proof-of-Work formulas for educational and informational purposes.</p>

    <h2>3. Nature of Estimates</h2>
    <p>Results are <em>approximate and theoretical</em>. They do not account for real-world variables including pool fees, network difficulty fluctuations, price volatility, hardware downtime, transaction fees, or other costs. Actual mining outcomes may vary significantly.</p>

    <h2>4. No Warranties</h2>
    <p>The Tool is provided <strong>"as is"</strong> without warranties of any kind, express or implied, including accuracy, reliability, or fitness for a particular purpose. We do not guarantee that results will reflect real mining profits or losses.</p>

    <h2>5. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from use of the Tool, including financial losses from mining decisions based on its outputs. Users assume all risks associated with cryptocurrency mining.</p>

    <h2>6. User Responsibilities</h2>
    <p>Users are responsible for:</p>
    <ul>
      <li>Providing accurate and current input values.</li>
      <li>Understanding the Tool's limitations and using results as estimates only.</li>
      <li>Complying with applicable laws regarding cryptocurrency activities.</li>
      <li>Maintaining security of their devices and inputs.</li>
    </ul>

    <h2>7. Intellectual Property</h2>
    <p>The Tool's source code, design, and content are protected by copyright and other laws. Unauthorized distribution or modification is prohibited unless permitted by open-source licensing where applicable.</p>

    <h2>8. Prohibited Uses</h2>
    <p>You may not use the Tool for illegal purposes, to interfere with its operation, or in ways that violate third-party rights.</p>

    <h2>9. Changes to Terms</h2>
    <p>We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms are governed by laws applicable to static web tools, without regard to conflict of law principles.</p>

    <h2>11. Contact</h2>
    <p>For inquiries, refer to the project's repository.</p>

    <p class="italic-note"><strong>Use the Tool responsibly</strong>—mining involves financial risk, and estimates are not financial advice.</p>
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