<script lang="ts">
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Switch from './Switch.svelte';

	let active = 'Inicio';
	let selectedRef = '/';
	const goto = () => {
		if (active === 'Inicio') {
			selectedRef = '/';
		}
		if (active === 'Búsqueda') {
			selectedRef = '/buscador';
		}
		if (active === 'Comparador') {
			selectedRef = '/comparador';
		}
		console.log(active);
		console.log(selectedRef);
	};
</script>

<LayoutGrid>
	<Cell>
		<div class="navContainer">
			<a href="/"> <img src="/img/logo.png" alt="logo" id="logo" /> </a>
			<TabBar tabs={['Inicio', 'Búsqueda', 'Comparador']} let:tab bind:active on:click={goto}>
				<Tab {tab} href={selectedRef}>
					<Label>{tab}</Label>
				</Tab>
			</TabBar>
			<Switch />
		</div>
	</Cell>
</LayoutGrid>

<style>
	.navContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 20px;
		padding-right: 20px;
	}
	#logo {
		margin-right: 20px;
		height: 60px;
	}
</style>
