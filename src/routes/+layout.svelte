<script>
	import '../app.css';
	import Navbar from '../components/ui/Navbar.svelte'
	import Footer from '../components/ui/Footer.svelte'

	let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer />