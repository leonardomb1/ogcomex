<script>
  import { onMount } from 'svelte';
  import Header from '../components/ui/Header.svelte';
  import Hero from '../components/ui/Hero.svelte';
  import Services from '../components/ui/Services.svelte';
  import Process from '../components/ui/Process.svelte';
  import About from '../components/ui/About.svelte';
  import Carousel from '../components/ui/Carousel.svelte';
  import CaseStudies from '../components/ui/CaseStudies.svelte';
  import Contact from '../components/ui/Contact.svelte';
  import Footer from '../components/ui/Footer.svelte';
  import Banner from '../components/ui/Banner.svelte';

  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onMount(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true;
      document.documentElement.classList.add('dark');
    }
  });
</script>

<div class={darkMode ? 'dark' : ''}>
  <div class="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 font-inter">
    <Header />
    <main>
      <Banner />
      <Hero />
      <About />
      <Services />
      <Process />
      <Carousel />
      <CaseStudies />
      <Contact />
    </main>
    <Footer />
  </div>
</div>