<script>
	import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/common';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import CardPokemon from './Opciones/CardPokemon.svelte';
	import CardHabilidad from './Opciones/CardHabilidad.svelte';
	import CardRegion from './Opciones/CardRegion.svelte';
	import CardMovimiento from './Opciones/CardMovimiento.svelte';
	import { busqueda } from '../../stores/busquedaStore';

	let value = '';
	let disableFab = true;
	let opciones = ['Pokémon', 'Habilidad', 'Región', 'Movimiento'];
	let selected = 'Pokémon';
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

<main>
	<div class="solo-container">
		<SegmentedButton segments={opciones} let:segment singleSelect bind:selected>
			<Wrapper>
				<Segment {segment}>
					<Label>{segment}</Label>
				</Segment>
				<Tooltip>Busqueda por {segment}</Tooltip>
			</Wrapper>
		</SegmentedButton>
	</div>
	<div class="solo-demo-container solo-container">
		<Paper class="solo-paper" elevation={6}>
			<Icon class="material-icons">search</Icon>
			<Input bind:value placeholder="Buscar" class="solo-input" />
		</Paper>
		<Fab
			disabled={disableFab}
			color={disableFab ? 'secondary' : 'primary'}
			mini
			class="solo-fab"
			on:click={alerta}
		>
			<Icon class="material-icons">arrow_forward</Icon>
		</Fab>
	</div>

	<div class="solo-demo-container solo-container">
		{#if selected === 'Pokémon'}
			<CardPokemon />
		{:else if selected === 'Habilidad'}
			<CardHabilidad />
		{:else if selected === 'Región'}
			<CardRegion />
		{:else if selected === 'Movimiento'}
			<CardMovimiento />
		{/if}
	</div>
</main>

<style>
	.solo-demo-container {
		padding: 36px 18px;
		background-color: var(--mdc-theme-background, #f8f8f8);
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
		color: var(--mdc-theme-on-surface, #000);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface, #000);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
