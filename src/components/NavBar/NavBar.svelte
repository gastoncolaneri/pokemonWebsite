<script lang="ts">
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar/TabBar.svelte';
	import Switch from '../Switch/Switch.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let active: any;
	let activeTab: any;
	let selected: any;

	onMount(() => {
		activeTab = localStorage.getItem('tabActive');
		selected = localStorage.getItem('selected');
		goto(activeTab);
		active = selected;
	});
	const navigate = () => {
		if (active === 'Home') {
			goto('/');
			localStorage.setItem('tabActive', '/');
			localStorage.setItem('selected', 'Home');
		}
		if (active === 'Browser') {
			goto('/browser');
			localStorage.setItem('tabActive', '/browser');
			localStorage.setItem('selected', 'Browser');
		}
		if (active === 'Comparator') {
			goto('/comparator');
			localStorage.setItem('tabActive', '/comparator');
			localStorage.setItem('selected', 'Comparator');
		}
	};
</script>

<div class="navContainer">
	<a href="/"> <img src="/img/logo.png" alt="logo" id="logo" /> </a>
	<TabBar tabs={['Home', 'Browser', 'Comparator']} let:tab bind:active on:click={navigate}>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
	<Switch />
</div>

<style>
	.navContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	#logo {
		margin-right: 20px;
		height: 60px;
	}
</style>
