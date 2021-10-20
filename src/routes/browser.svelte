<script>
	import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/common';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import CardPokemon from '../components/CardBrowser/Choices/CardPokemon.svelte';
	import CardAbility from '../components/CardBrowser/Choices/CardAbility.svelte';
	import CardRegion from '../components/CardBrowser/Choices/CardRegion.svelte';
	import CardMovement from '../components/CardBrowser/Choices/CardMovement.svelte';
	import { busqueda } from '../stores/store';

	let value = '';
	let disableFab = true;
	let opciones = ['Pokemon', 'Ability', 'Region', 'Movement'];
	let selected = 'Pokemon';
	$: {
		if (value === '') {
			disableFab = true;
			busqueda.set(value.toLowerCase());
		} else {
			disableFab = false;
			busqueda.set(value.toLowerCase());
		}
	}

	$: {
		selected;
		value = '';
	}

	const alerta = () => {
		alert('hola');
	};
</script>

<svelte:head>
	<title>Browser</title>
</svelte:head>

<main>
	<div class="solo-container">
		<SegmentedButton segments={opciones} let:segment singleSelect bind:selected>
			<Wrapper>
				<Segment {segment}>
					<Label>{segment}</Label>
				</Segment>
				<Tooltip>Search by {segment}</Tooltip>
			</Wrapper>
		</SegmentedButton>
	</div>
	<div class="solo-demo-container solo-container">
		<Paper class="solo-paper" elevation={6}>
			<Icon class="material-icons">search</Icon>
			<Input bind:value placeholder="Search" class="solo-input" />
		</Paper>
	</div>

	<div class="solo-demo-container solo-container">
		{#if selected === 'Pokemon'}
			<CardPokemon />
		{:else if selected === 'Ability'}
			<CardAbility />
		{:else if selected === 'Region'}
			<CardRegion />
		{:else if selected === 'Movement'}
			<CardMovement />
		{/if}
	</div>
</main>

<style>
	.solo-demo-container {
		padding: 36px 18px;
		background-color: var(--mdc-theme-background);
	}

	.solo-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 0 12px;
		height: 48px;
	}
	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}
	* :global(.solo-input) {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
