<script>
	import '../app.css';
	
	import { onMount } from 'svelte';
	import Header from '../components/ui/Header.svelte';
	import Footer from '../components/ui/Footer.svelte';
	
	let darkMode = $state(false);
  
	function toggleDarkMode() {
		darkMode = !darkMode;
		updateDarkModeClass();
	}
	
	function updateDarkModeClass() {
		if (darkMode) {
		document.documentElement.classList.add('dark');
		} else {
		document.documentElement.classList.remove('dark');
		}
	}
	
	$effect(() => {
		updateDarkModeClass();
	});
	
	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		darkMode = true;
		}
		
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e) => {
		darkMode = e.matches;
		};
		
		mediaQuery.addEventListener('change', handleChange);
		
		return () => {
		mediaQuery.removeEventListener('change', handleChange);
		};
	});

	let { children } = $props();
</script>

<div class="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 font-inter">
	<Header {darkMode} {toggleDarkMode}/>
	{@render children()}
	<Footer />
</div>