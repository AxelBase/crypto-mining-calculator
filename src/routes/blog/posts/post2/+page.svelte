<!-- src/routes/blog/posts/post2/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Proof-of-Work Mining Mathematics | Blog</title>
  <meta name="description" content="Explore the core mathematical formula behind Proof-of-Work mining and how hash rate, network difficulty, and block rewards determine expected revenue." />
  <meta property="og:title" content="Understanding Proof-of-Work Mining Mathematics | Blog" />
  <meta property="og:description" content="Explore the core mathematical formula behind Proof-of-Work mining and how hash rate, network difficulty, and block rewards determine expected revenue." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Proof-of-Work Mining Mathematics</p>
  </div>

  <article class="prose">
    <h1>Understanding Proof-of-Work Mining Mathematics</h1>
   
    <p class="post-meta">Published: December 15, 2025</p>
   
    <p>Proof-of-Work mining relies on a probabilistic mathematical model that rewards miners proportionally to their contributed hashing power. The core idea is simple: the more hashes you compute per second relative to the entire network, the higher your expected share of block rewards.</p>
   
    <p>This relationship forms the foundation of all mining profitability calculations. The calculator uses this exact principle to estimate revenue before subtracting operational costs.</p>
   
    <h2>The Fundamental Formula</h2>
    <p>Your mining rig generates a certain number of hashes per second. The network as a whole has a total hash rate derived from its difficulty setting. Your fraction of the total network hash rate determines how often you are statistically likely to solve a block.</p>
   
    <p>In practice, the expected blocks solved per second equals your hash rate divided by the network difficulty (adjusted for units). Multiplying this by the block reward gives coins earned per second, which can then be scaled to daily revenue when multiplied by the coin price.</p>
   
    <h2>Breaking Down the Components</h2>
    <p>Hash rate measures hardware performance in millions of hashes per second. Higher values directly increase expected rewards. Network difficulty adjusts roughly every two weeks in many chains to maintain consistent block times. Rising difficulty reduces individual earnings unless offset by hardware upgrades.</p>
   
    <p>Block reward is the fixed amount of new coins plus transaction fees awarded per block. Halving events periodically reduce this reward, impacting long-term profitability.</p>
   
    <h2>From Probability to Daily Revenue</h2>
    <p>The calculator converts your hash rate to hashes per second, divides by difficulty converted to total hashes, multiplies by block reward to get coins per second, then scales to 86,400 seconds in a day. The final daily revenue in USD is this coin amount times the current market price.</p>
   
    <p>This probabilistic approach means actual results fluctuate around the expected value, but over longer periods, earnings converge toward the calculated average.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why is difficulty measured in petahashes?</summary>
      <p>Modern networks operate at extremely high total hash rates, making petahashes a practical unit for expressing difficulty.</p>
    </details>
    <details>
      <summary>Does luck affect short-term results?</summary>
      <p>Yes. Solving blocks is random, so daily earnings can vary significantly from the calculated expectation.</p>
    </details>
    <details>
      <summary>How accurate is the revenue estimate?</summary>
      <p>Very accurate as a long-term average when inputs reflect current network conditions.</p>
    </details>
   
    <p class="italic-note">Mastering these relationships helps miners make informed decisions about hardware and operational strategy.</p>
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