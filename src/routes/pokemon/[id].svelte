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
	import { onMount, afterUpdate } from 'svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { Chart } from 'chart.js';
	import { pokemonDetail } from '../../api/browser/pokemonDetail';
	import Loader from '../../components/Loader/Loader.svelte';

	let pokemonInfo: any;
	let id: number;
	let promisePokemon: any;
	let radar: any;

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
	<div class="containerCard ">
		<Cell span={4}>
			<Card class="mdc-elevation--z15">
				<div style="padding: 1rem;">
					<div class="mdc-typography--button" style="margin: 0;">
						<strong>{pokemon.name}</strong>
					</div>
				</div>
				<Image
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt="Image"
					aspectRatio="square"
				/>
				<Content class="mdc-typography--body2">
					<div class="mdc-typography--headline6">Estadísticas</div>
					{#each pokemon.stats as stats}
						<div class="mdc-typography--subtitle2 capitalize">
							{stats.stat.name}: {stats.base_stat}
						</div>
					{/each}
					<canvas id="grafica" width="1" height="1" />
				</Content>
			</Card>
		</Cell>
	</div>
{/await}

<style>
	.containerCard {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.capitalize {
		text-transform: capitalize;
	}
</style>
