<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import "../app.css";

  // --- Support Logic ---
  let isDropdownOpen = false;
  const bmacLink = "https://buymeacoffee.com/axelbase";
  const bitcoinLink = "bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee";

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside directive
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar">
  <div class="container d-flex align-items-center justify-content-between h-100">
    
    <div class="d-flex align-items-center gap-4">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none group">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelLab Logo" class="brand-logo" />
        <span class="brand-text ms-2">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="bmac-button" 
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-md-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            <a href={bmacLink} target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href={bmacLink} target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href={bmacLink} target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href={bmacLink} target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount-link">
              Custom Amount
            </a>

            <a href={bitcoinLink} on:click={closeDropdown} class="custom-amount-link bitcoin-link">
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <nav class="d-none d-lg-block">
      <ul class="nav-menu m-0 p-0 d-flex gap-4">
        <li><a href="{base}/" class="nav-link-custom">Home</a></li>
        <li><a href="{base}/#about" class="nav-link-custom">About</a></li>
        <li><a href="{base}/#how-to" class="nav-link-custom">How to use</a></li>
        <li><a href="{base}/#faq" class="nav-link-custom">FAQ</a></li>
        <li><a href="{base}/blog" class="nav-link-custom">Blog</a></li>
      </ul>
    </nav>
    
    <button 
        class="d-lg-none btn btn-link text-dark" 
        type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#mobileNav"
        aria-label="Toggle Mobile Menu"
    >
      <i class="bi bi-list fs-1" style="color: var(--primary-ochre);"></i>
    </button>
  </div>
  
  <div class="collapse d-lg-none bg-white border-bottom" id="mobileNav">
    <div class="container py-3">
        <ul class="list-unstyled d-flex flex-column gap-3 text-center mb-0">
            <li><a href="{base}/" class="nav-link-custom">Home</a></li>
            <li><a href="{base}/#about" class="nav-link-custom">About</a></li>
            <li><a href="{base}/#how-to" class="nav-link-custom">How to use</a></li>
            <li><a href="{base}/#faq" class="nav-link-custom">FAQ</a></li>
            <li><a href="{base}/blog" class="nav-link-custom">Blog</a></li>
        </ul>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="fixed-footer text-center">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <small class="text-muted mb-2 mb-md-0">© {new Date().getFullYear()} AxelBase Crypto Mining Calculator</small>
    <div>
        <a href="{base}/privacy" class="footer-link">Privacy</a>
        <span class="text-muted">•</span>
        <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    border-bottom: 1px solid rgba(174, 160, 75, 0.1);
  }

  .brand-logo {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
  }
  
  .group:hover .brand-logo {
    transform: rotate(10deg);
  }

  .brand-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-ochre);
    letter-spacing: -0.5px;
  }

  .nav-menu {
    list-style: none;
  }

  .nav-link-custom {
    color: #2c2c2c;
    font-weight: 600;
    font-size: 1.05rem;
    position: relative;
    padding: 5px 0;
    text-decoration: none;
  }

  .nav-link-custom::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-ochre);
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .nav-link-custom:hover {
    color: var(--primary-ochre);
  }

  .nav-link-custom:hover::after {
    width: 100%;
  }

  /* --- Integrated Dropdown Styling --- */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: var(--smooth-shadow);
    overflow: hidden;
    border: 1px solid rgba(174, 160, 75, 0.1);
    z-index: 1000;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(174, 160, 75, 0.08);
    color: var(--primary-ochre);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--primary-ochre);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount-link {
    font-weight: 600;
    color: var(--primary-ochre);
    border-top: 1px solid #eee;
    justify-content: center;
  }

  .bitcoin-link {
    background-color: #f8f9fa;
    font-size: 0.9rem !important;
  }
</style>