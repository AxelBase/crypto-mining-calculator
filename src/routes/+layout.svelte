<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import "../app.css";

  // --- Buy Me a Coffee Logic ---
  const paypalUsername = 'AxelLab427'; // <--- CHANGE THIS
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

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
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          <span class="d-none d-md-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: 10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
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
      <i class="bi bi-list fs-1" style="color: #AEA04B;"></i>
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
  /* Local Scoped Styles for Layout structure */
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
    color: #AEA04B;
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
  }

  .nav-link-custom::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #AEA04B;
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .nav-link-custom:hover {
    color: #AEA04B;
  }

  .nav-link-custom:hover::after {
    width: 100%;
  }
</style>