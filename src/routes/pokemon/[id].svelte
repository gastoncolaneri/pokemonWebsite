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

	let pokemonInfo: any;

	onMount(() => {
		pokemonDetail(parseInt($page.params.id)).then((poke) => {
			pokemonInfo = poke.name;
		});
	});
</script>

<div class="card-container">
	<h2 class="mdc-typography--headline6" style="margin: 0;">{pokemonInfo}</h2>
</div>

<style>
</style>
