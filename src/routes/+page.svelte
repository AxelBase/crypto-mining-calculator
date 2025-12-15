<script>
  import { calculateProfits, validateInputs } from '$lib/calculator';
  import { fade, slide } from 'svelte/transition';
    import { base } from '$app/paths';


  let inputs = {
    hashRate: 100,        // MH/s
    difficulty: 12,       // PH (example for legacy ETH)
    blockReward: 2,       // coins per block
    coinPrice: 2000,      // USD per coin
    powerConsumption: 300,// watts
    electricityCost: 0.10 // USD/kWh
  };

  let results = null;
  let error = null;

  function handleSubmit() {
    error = null;
    results = null;

    const validationError = validateInputs(inputs);
    if (validationError) {
      error = validationError;
      return;
    }

    // Small timeout to show transition effect
    setTimeout(() => {
        results = calculateProfits(inputs);
    }, 200);
  }
</script>

<svelte:head>
  <title>Crypto Mining Calculator | Simple PoW Profit Estimator</title>
  <meta name="description" content="Free, privacy-focused client-side calculator for estimating Proof-of-Work cryptocurrency mining profitability. Input hash rate, difficulty, power costs, and get daily/weekly/monthly profit estimates instantly." />
  <meta property="og:title" content="Crypto Mining Calculator | Simple PoW Profit Estimator" />
  <meta property="og:description" content="Free, privacy-focused client-side calculator for estimating Proof-of-Work cryptocurrency mining profitability. Input hash rate, difficulty, power costs, and get daily/weekly/monthly profit estimates instantly." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{base}/" />
</svelte:head>

<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      
      <div class="card p-5 mb-5">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bold mb-2">Mining Profitability</h1>
            <p class="text-muted">Calculate your potential earnings with real-time accuracy</p>
        </div>

        <form on:submit|preventDefault={handleSubmit}>
          <div class="row g-4">
            <div class="col-md-6">
              <label for="hashRate" class="form-label">Hash Rate (MH/s)</label>
              <input type="number" id="hashRate" class="form-control" bind:value={inputs.hashRate} min="0" step="any" required />
            </div>

            <div class="col-md-6">
              <label for="difficulty" class="form-label">Network Difficulty (PH)</label>
              <input type="number" id="difficulty" class="form-control" bind:value={inputs.difficulty} min="0" step="any" required />
            </div>

            <div class="col-md-6">
              <label for="blockReward" class="form-label">Block Reward (coins)</label>
              <input type="number" id="blockReward" class="form-control" bind:value={inputs.blockReward} min="0" step="any" required />
            </div>

            <div class="col-md-6">
              <label for="coinPrice" class="form-label">Coin Price (USD)</label>
              <input type="number" id="coinPrice" class="form-control" bind:value={inputs.coinPrice} min="0" step="any" required />
            </div>

            <div class="col-md-6">
              <label for="powerConsumption" class="form-label">Power Consumption (watts)</label>
              <input type="number" id="powerConsumption" class="form-control" bind:value={inputs.powerConsumption} min="0" step="any" required />
            </div>

            <div class="col-md-6">
              <label for="electricityCost" class="form-label">Electricity Cost (USD/kWh)</label>
              <input type="number" id="electricityCost" class="form-control" bind:value={inputs.electricityCost} min="0" step="0.01" required />
            </div>
          </div>

          <div class="text-center mt-5">
            <button type="submit" class="btn btn-primary btn-lg px-5 py-3 fs-5 shadow-sm">
                Calculate Profit
            </button>
          </div>
        </form>

        {#if error}
          <div class="alert alert-danger mt-4 rounded-3 text-center" role="alert" transition:slide>
            {error}
          </div>
        {/if}

        {#if results}
          <div class="mt-5" transition:slide>
            <div class="row text-center g-3">
              <div class="col-md-4">
                <div class="p-4 bg-light rounded-4 h-100 border border-1">
                  <h5 class="text-muted mb-3">Daily</h5>
                  <p class="display-6 mb-0 {results.dailyProfit >= 0 ? 'text-profit-positive' : 'text-profit-negative'}">
                    ${results.dailyProfit.toFixed(2)}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-4 bg-light rounded-4 h-100 border border-1">
                  <h5 class="text-muted mb-3">Weekly</h5>
                  <p class="display-6 mb-0 {results.weeklyProfit >= 0 ? 'text-profit-positive' : 'text-profit-negative'}">
                    ${results.weeklyProfit.toFixed(2)}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-4 bg-light rounded-4 h-100 border border-1">
                  <h5 class="text-muted mb-3">Monthly</h5>
                  <p class="display-6 mb-0 {results.monthlyProfit >= 0 ? 'text-profit-positive' : 'text-profit-negative'}">
                    ${results.monthlyProfit.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>

<!-- Updated sections for src/routes/+page.svelte (main calculator page) -->

<section id="about" class="text-center mb-5">
  <h2 class="mb-4">About the Crypto Mining Calculator</h2>
  <div class="card p-5 shadow-sm">
    <div class="card-body">
      <p class="lead mb-4">
        The Crypto Mining Calculator is a lightweight, fully client-side web utility built to help cryptocurrency enthusiasts and miners quickly estimate Proof-of-Work mining profitability. Running entirely in your browser with no server dependencies, it guarantees complete privacy—no data collection, no tracking, and no external requests after initial load.
      </p>
      <p>
        This tool adheres strictly to its Software Requirements Specification (SRS), focusing on three core functional requirements: collecting user inputs, performing accurate client-side calculations, and providing simple navigation to informational pages. All profit logic is isolated in a single JavaScript file for clarity and maintainability, while the static structure enables seamless deployment on platforms like GitHub Pages.
      </p>
      <p>
        At its heart, the calculator applies the fundamental probabilistic model of PoW mining: your expected rewards are proportional to your hash rate divided by the network's total difficulty, multiplied by the block reward and coin price. Electricity costs are subtracted to yield net daily profit, which is then scaled to weekly (×7) and monthly (×30) estimates.
      </p>
      <p>
        Unlike many online tools that rely on real-time APIs (potentially introducing delays, inaccuracies, or privacy risks), this calculator requires manual input of current values. This design promotes user understanding of key parameters—hash rate, difficulty, block reward, price, power consumption, and electricity cost—while supporting any PoW cryptocurrency.
      </p>
      <p>
        Results feature color-coded feedback (green for profit, red for loss) for instant insight. The accompanying blog delves deeper into the mathematics, input explanations, cost analysis, result interpretation, limitations, and best practices, as outlined across seven detailed articles.
      </p>
      <p>
        Whether you're a beginner learning mining economics, a hobbyist comparing hardware scenarios, or an experienced miner evaluating electricity rates, this tool offers transparent, offline-capable estimates. It emphasizes theoretical averages under static conditions, reminding users that real-world variance from difficulty changes, price volatility, and block luck always applies.
      </p>
      <p>
        By prioritizing simplicity, accuracy, and privacy, the Crypto Mining Calculator empowers informed decisions without unnecessary complexity or data risks.
      </p>
    </div>
  </div>
</section>

<section id="how-to" class="mb-5">
  <h2 class="mb-4 text-center">How to Use the Crypto Mining Calculator</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card p-4 h-100 text-center shadow-sm">
        <div class="display-4 text-primary mb-3">1</div>
        <h5>Gather Accurate Data</h5>
        <p class="text-muted">
          Collect current values from reliable sources: hash rate from your mining software, network difficulty and block reward from blockchain explorers (e.g., 2Miners, WhatToMine), coin price from major exchanges, measured power consumption via a watt meter, and your exact electricity rate per kWh.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p-4 h-100 text-center shadow-sm">
        <div class="display-4 text-primary mb-3">2</div>
        <h5>Enter Your Inputs</h5>
        <p class="text-muted">
          Fill the six fields on the main form: Hash Rate (MH/s), Network Difficulty (PH), Block Reward (coins), Coin Price (USD), Power Consumption (watts), and Electricity Cost (USD/kWh). The tool validates for positive numbers only.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p-4 h-100 text-center shadow-sm">
        <div class="display-4 text-primary mb-3">3</div>
        <h5>Calculate & Analyze</h5>
        <p class="text-muted">
          Click "Calculate Profit" to see instant results. Review daily net profit (revenue minus electricity), then weekly and monthly scales. Green indicates profitability; red signals losses. Adjust inputs to test scenarios like upgrades or rate changes.
        </p>
      </div>
    </div>
  </div>
  <div class="mt-4 card p-4 shadow-sm">
    <h5 class="mb-3">Tips for Best Results</h5>
    <ul class="text-muted">
      <li>Update inputs frequently—difficulty and price fluctuate.</li>
      <li>Manually subtract pool fees (typically 1-2%) from results.</li>
      <li>Use measured rather than theoretical power draw.</li>
      <li>Experiment with different coins by changing reward/difficulty/price.</li>
      <li>Read the blog for detailed explanations of each parameter and limitations.</li>
    </ul>
    <p class="text-muted mt-3">
      The entire process happens locally in your browser, works offline after loading, and supports any PoW cryptocurrency with correct inputs.
    </p>
  </div>
</section>

<section id="faq" class="mb-5">
  <h2 class="mb-4 text-center">Frequently Asked Questions</h2>
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          How accurate are the profit estimates?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          Calculations are mathematically precise based on provided inputs, reflecting long-term expected averages. However, real mining includes variance from block luck, difficulty increases, and price changes. Results are theoretical estimates only.
        </div>
      </div>
    </div>
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          Does it include pool fees or other costs?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          No. It calculates gross revenue minus electricity only. Subtract your pool fee percentage (usually 1-2%) manually, and consider additional expenses like cooling or internet separately.
        </div>
      </div>
    </div>
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          Why no real-time data fetching?
        </button>
      </h2>
      <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          To ensure maximum privacy and offline functionality. No API calls means no data leaves your device. Manual input encourages using verified sources and understanding parameters.
        </div>
      </div>
    </div>
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
          Can I calculate for any PoW coin?
        </button>
      </h2>
      <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          Yes—Ethereum Classic, Ravencoin, Kaspa, Ergo, and others. Just enter the correct block reward and difficulty (scaled appropriately).
        </div>
      </div>
    </div>
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
          What if results show negative profit?
        </button>
      </h2>
      <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          Electricity costs exceed expected revenue under current conditions. Consider more efficient hardware, cheaper power, or waiting for better market prices/difficulty.
        </div>
      </div>
    </div>
    <div class="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
          Is my data private and secure?
        </button>
      </h2>
      <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
          Absolutely. As a static client-side tool, nothing is sent anywhere. Inputs stay in your browser only.
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</div>