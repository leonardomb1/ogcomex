<script>
  import Header from "../components/ui/Header.svelte"
  import Hero from "../components/ui/Hero.svelte"
  import Services from "../components/ui/Services.svelte"
  import Process from "../components/ui/Process.svelte"
  import About from "../components/ui/About.svelte"
  // import Carousel from "../components/ui/Carousel.svelte"
  import CaseStudies from "../components/ui/CaseStudies.svelte"
  import Contact from "../components/ui/Contact.svelte"
  import Footer from "../components/ui/Footer.svelte"
  import Banner from "../components/ui/Banner.svelte"
</script>

<svelte:head>
  <title>OGComex</title>
  <meta
    name="description"
    content="OGComex é uma empresa de consultoria especializada em comércio exterior, oferecendo serviços de importação, exportação, desembaraço aduaneiro, conformidade regulatória e otimização da cadeia de suprimentos no Brasil."
  />
  <meta
    name="keywords"
    content="consultoria, comércio exterior, importação, exportação, desembaraço aduaneiro, conformidade regulatória, cadeia de suprimentos, OGComex, Brasil"
  />
  <meta name="author" content="Green Beret Ltd." />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main>
  <Banner />
  <Hero />
  <About />
  <Services />
  <Process />
  <!-- <Carousel /> -->
  <CaseStudies />
  <Contact />
</main>
