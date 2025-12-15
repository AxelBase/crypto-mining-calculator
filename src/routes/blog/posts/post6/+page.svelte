<!-- src/routes/blog/posts/post6/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Limitations and Real-World Considerations | Blog</title>
  <meta name="description" content="Honest discussion of what the calculator does not include: pool fees, difficulty trends, price volatility, and other factors affecting actual mining returns." />
  <meta property="og:title" content="Limitations and Real-World Considerations | Blog" />
  <meta property="og:description" content="Honest discussion of what the calculator does not include: pool fees, difficulty trends, price volatility, and other factors affecting actual mining returns." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Limitations and Real-World Considerations</p>
  </div>

  <article class="prose">
    <h1>Limitations and Real-World Considerations</h1>
   
    <p class="post-meta">Published: December 15, 2025</p>
   
    <p>While the mining calculator provides valuable estimates, it intentionally simplifies certain aspects to remain lightweight and privacy-focused. Understanding its limitations ensures users apply results appropriately and avoid unrealistic expectations.</p>
   
    <p>The tool focuses on core revenue versus electricity cost, deliberately excluding several real-world variables that affect actual returns.</p>
   
    <h2>Excluded Factors</h2>
    <p>Pool fees are not deducted from revenue. Most miners join pools for consistent payouts, and pools typically charge 1 to 2 percent fees. This reduces effective earnings below the calculator's gross figures.</p>
   
    <p>Network difficulty changes over time. The calculator uses a snapshot value provided by the user. In reality, difficulty often increases as more miners join, gradually lowering individual shares unless hash rate grows accordingly.</p>
   
    <h2>Price and Market Volatility</h2>
    <p>Coin price is a manual input. Cryptocurrency markets fluctuate dramatically, meaning today's profitable setup could become unviable tomorrow if prices drop. The tool cannot predict market movements.</p>
   
    <p>Transaction fees included in block rewards vary with network activity. Some periods see high fees boosting rewards significantly, while quiet times offer only the base subsidy.</p>
   
    <h2>Operational Realities</h2>
    <p>Hardware degradation, downtime for maintenance, or internet outages reduce effective mining time. Initial hardware costs and depreciation are not factored into running profit calculations.</p>
   
    <p>Tax implications vary by jurisdiction. Mining rewards may be treated as income or capital gains, affecting net take-home amounts substantially.</p>
   
    <h2>Probabilistic Nature of Mining</h2>
    <p>Block discovery is random. Solo miners especially may experience long periods without rewards followed by large payouts. The calculator shows expected averages, not guaranteed daily earnings.</p>
   
    <p>Even pooled mining introduces variance, though much less than solo efforts. Over months, results approach the calculated expectation.</p>
   
    <h2>Using Estimates Wisely</h2>
    <p>Treat outputs as theoretical maximums under ideal, static conditions. Subtract pool fees mentally and build in buffers for difficulty increases and price drops. Regular updates to inputs provide the most relevant guidance.</p>
   
    <p>The simplicity enables quick scenario testing but requires user judgment for final decisions.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why not include pool fees?</summary>
      <p>Fees vary by pool; users can subtract their specific percentage from results manually.</p>
    </details>
    <details>
      <summary>Is the calculator suitable for long-term planning?</summary>
      <p>Yes for direction, but combine with trend analysis for difficulty and price.</p>
    </details>
    <details>
      <summary>Does it account for hardware cooling needs?</summary>
      <p>No, additional power for cooling should be added to consumption manually.</p>
    </details>
   
    <p class="italic-note">Awareness of these limitations turns good estimates into informed mining strategies.</p>
  </article>
</div>

<style>
  /* Same styling repeated */
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
  .prose h1, .prose h2{
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
  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }
  .prose details[open] {
    background-color: var(--card-bg);
  }
  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  .prose summary::-webkit-details-marker {
    display: none;
  }
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .prose details[open] summary::before {
    transform: rotate(45deg);
  }
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }
  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>