<script>
  import { content } from '$lib/ui/header'
  import { onMount, onDestroy } from 'svelte'
  import { darkMode } from '$lib/stores'
  let { toggleDarkMode } = $props()

  let isMenuOpen = $state(false)
  let isServicesDropdownOpen = $state(false)
  let scrolled = $state(false)

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
    if (isMenuOpen) {
      isServicesDropdownOpen = false
    }
  }

  function toggleServicesDropdown() {
    isServicesDropdownOpen = !isServicesDropdownOpen
  }

  function handleScroll() {
    scrolled = window.scrollY > 20
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<header
  class={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">
      <div class="flex items-center">
        <a href="/#banner" class="flex items-center">
          {#if $darkMode}
            <img
              src="./images/logoWhite.png"
              alt="OGComex Logo"
              class="h-16 w-auto"
            />
          {:else}
            <img
              src="./images/logo.png"
              alt="OGComex Logo"
              class="h-16 w-auto"
            />
          {/if}
        </a>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <div class="relative">
          <button
            onclick={toggleServicesDropdown}
            class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex items-center"
            aria-expanded={isServicesDropdownOpen}
          >
            {content.services}
            <svg
              class={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {#if isServicesDropdownOpen}
            <div
              class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
            >
              <div class="py-1" role="menu" aria-orientation="vertical">
                {#each content.serviceItems as item}
                  <a
                    href={item.href}
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                    onclick={() => (isServicesDropdownOpen = false)}
                  >
                    {item.name}
                  </a>
                {/each}
              </div>
            </div>
          {/if}
        </div>

        <a
          href="/about"
          class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          {content.about}
        </a>

        <a
          href="/#contact"
          class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          {content.contact}
        </a>

        <button
          onclick={() => toggleDarkMode()}
          class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label={$darkMode
            ? 'Switch to light mode'
            : 'Switch to dark mode'}
        >
          {#if $darkMode}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          {/if}
        </button>
      </div>

      <div class="md:hidden flex items-center">
        <button
          onclick={toggleMenu}
          class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {#if isMenuOpen}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden bg-white dark:bg-gray-900 shadow-lg">
      <nav class="flex flex-col space-y-4 px-4 py-6">
        <div>
          <button
            onclick={toggleServicesDropdown}
            class="w-full text-left flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            aria-expanded={isServicesDropdownOpen}
          >
            {content.services}
            <svg
              class={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {#if isServicesDropdownOpen}
            <div class="mt-2 pl-4 space-y-2">
              {#each content.serviceItems as item}
                <a
                  href={item.href}
                  class="block py-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  onclick={toggleMenu}
                >
                  {item.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>

        <a
          href="#about"
          class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          onclick={toggleMenu}
        >
          {content.about}
        </a>

        <a
          href="#contact"
          class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          onclick={toggleMenu}
        >
          {content.contact}
        </a>

        <div class="flex space-x-4 pt-2">
          <button
            onclick={toggleDarkMode}
            class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {#if $darkMode}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            {:else}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            {/if}
          </button>
        </div>
      </nav>
    </div>
  {/if}
</header>
