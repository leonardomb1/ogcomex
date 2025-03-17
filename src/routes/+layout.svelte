<script>
  import '../app.css'

  import { onMount } from 'svelte'
  import Header from '../components/ui/Header.svelte'
  import Footer from '../components/ui/Footer.svelte'

  let darkMode = $state(false)

  function toggleDarkMode() {
    darkMode = !darkMode
    localStorage.setItem('darkMode', darkMode)
  }

  onMount(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      darkMode = true
    }
  })

  let { children } = $props()
</script>

<div
  class="{darkMode
    ? 'dark'
    : ''} bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 font-inter"
>
  <Header {darkMode} {toggleDarkMode} />
  {@render children()}
  <Footer />
</div>
