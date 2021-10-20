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
	import { pokemonDetail } from '../../api/browser/pokemonDetail';
	import Loader from '../../components/Loader/Loader.svelte';

	let pokemonInfo: any;
	let id: number;
	let promisePokemon: any;

	if (parseInt($page.params.id) > 898) {
		id = parseInt($page.params.id) + 9102;
		console.log(id);
	} else {
		id = parseInt($page.params.id);
		console.log(id);
	}

	promisePokemon = pokemonDetail(id);
</script>

{#await promisePokemon}
	<Loader />
{:then pokemon}
	<div class="card-container">
		<h2 class="mdc-typography--headline4" style="margin: 0;">{pokemon.name}</h2>
	</div>
{/await}

<style>
</style>
