<script lang="ts">
	import { page } from '$app/stores';
	import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';
	import ImageList, {
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label
	} from '@smui/image-list';
	import { onMount } from 'svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { pokemonDetalle } from '../../api/busquedas/pokemonDetalle';

	let pokemonInfo: any;

	onMount(() => {
		pokemonDetalle(parseInt($page.params.id)).then((poke) => {
			pokemonInfo = poke.name;
			console.log(pokemonInfo);
			console.log(pokemonInfo.name);
		});
	});
</script>

<div class="card-container">
	<h2 class="mdc-typography--headline6" style="margin: 0;">{pokemonInfo}</h2>
</div>

<style>
</style>
