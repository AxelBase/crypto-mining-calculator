<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introduction to the Crypto Mining Calculator', description: 'A comprehensive overview of this client-side tool that helps estimate cryptocurrency mining profitability using key parameters like hash rate and power costs.' },
    { href: '/blog/posts/post2', title: 'Understanding Proof-of-Work Mining Mathematics', description: 'Dive into the core formula behind PoW mining: how hash rate, network difficulty, and block rewards determine your share of mining revenue.' },
    { href: '/blog/posts/post3', title: 'Key Inputs Explained: Hash Rate, Difficulty, and Block Reward', description: 'Learn what each input means, why network difficulty (in PH) matters, and how block rewards drive daily earnings calculations.' },
    { href: '/blog/posts/post4', title: 'Calculating Electricity Costs in Mining Profitability', description: 'Breakdown of power consumption to daily/weekly/monthly costs and its critical impact on net profit in real-world mining scenarios.' },
    { href: '/blog/posts/post5', title: 'Interpreting Daily, Weekly, and Monthly Profit Results', description: 'How the calculator derives extended estimates from daily profits and what factors can cause positive or negative outcomes.' },
    { href: '/blog/posts/post6', title: 'Limitations and Real-World Considerations', description: 'Why this tool provides estimates only—ignoring pool fees, difficulty changes, price volatility, and other external variables.' },
    { href: '/blog/posts/post7', title: 'Best Practices for Accurate Mining Profit Estimates', description: 'Tips on gathering reliable input data, monitoring network changes, and using the calculator effectively for informed decisions.' },
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Mining Calculator Insights</title>
  <meta name="description" content="In-depth articles on cryptocurrency mining profitability, calculation formulas, input parameters, and practical usage of the static mining calculator tool." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Mining Calculator Insights</h1>
    <p class="subtitle">
      Explore technical explanations, formulas, and guides related to cryptocurrency mining profitability calculations. All content focuses on the mechanics of Proof-of-Work mining and how this tool estimates profits.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>