<script lang="ts">
	import NavBar from '../components/NavBar/NavBar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { switcher } from '../stores/store';

	let themeRef1: string;
	let themeRef2: string;
	$: {
		if ($switcher) {
			themeRef1 = '/smui.css';
			themeRef2 = '/site.css';
		} else {
			themeRef1 = '/smui-dark.css';
			themeRef2 = '/site-dark.css';
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={themeRef1} media="screen and (prefers-color-scheme: dark)" />
	<link rel="stylesheet" href={themeRef2} media="screen and (prefers-color-scheme: dark)" />
</svelte:head>

<div>
	<NavBar />
	<slot />
	<Footer />
</div>

<style>
</style>
