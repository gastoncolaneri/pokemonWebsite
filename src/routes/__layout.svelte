<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import { switcher } from '../stores/busquedaStore';
	let themeRef;
	$: {
		if ($switcher) {
			themeRef = '/smui.css';
		} else {
			themeRef = '/smui-dark.css';
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={themeRef} media="screen and (prefers-color-scheme: dark)" />
</svelte:head>

<NavBar />
<div>
	<slot />
</div>
<Footer />

<style>
</style>
