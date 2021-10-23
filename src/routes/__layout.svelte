<script lang="ts">
	import NavBar from '../components/NavBar/NavBar.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import Footer from '../components/Footer/Footer.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import Loader from '../components/Loader/Loader.svelte';
	let flag: boolean = true;

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}

	afterUpdate(() => {
		flag = false;
	});
</script>

<div>
	<div class="container">
		<NavBar />
		<div>
			<IconButton toggle on:click={switchTheme}>
				<Icon class="material-icons" on>dark_mode</Icon>
				<Icon class="material-icons">light_mode</Icon>
			</IconButton>
		</div>
	</div>
	{#if flag}
		<div class="container">
			<Loader />
		</div>
	{:else}
		<slot />
	{/if}
	<Footer />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
</style>
