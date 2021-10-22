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
	import { pokemonDetail } from '../../api/browser/pokemonDetail';
	import Loader from '../../components/Loader/Loader.svelte';
	import RadarChart from '../../components/RadarChart/RadarChart.svelte';

	let id: number;
	let promisePokemon: any;

	if (parseInt($page.params.id) > 898) {
		id = parseInt($page.params.id) + 9102;
	} else {
		id = parseInt($page.params.id);
	}
	promisePokemon = pokemonDetail(id);
</script>

{#await promisePokemon}
	<Loader />
{:then pokemon}
	<div class="containerCard ">
		<LayoutGrid>
			<Cell span={6}>
				<Card class="mdc-elevation--z15 cardBlock">
					<div class="mdc-typography--button">
						<strong>{pokemon.name}</strong>
					</div>
					<Image
						src={pokemon.sprites.other['official-artwork'].front_default}
						alt="Image"
						aspectRatio="square"
					/>
					<div>
						<div class="mdc-typography--button">type</div>
						{#each pokemon.types as type}
							<img
								class="typeIcon"
								src="/img/{type.type.name}.png"
								alt={pokemon.name}
								title={type.type.name}
							/>
						{/each}
					</div>
				</Card>
			</Cell>
			<Cell span={6}>
				<Card class="mdc-elevation--z15 cardBlock">
					<RadarChart {id} />
					<Content>
						<div class="mdc-typography--button">Ability</div>

						{#each pokemon.abilities as ability}
							<div class="mdc-typography--subtitle1 capitalize inline">{ability.ability.name}</div>
						{/each}
					</Content>
				</Card>
			</Cell>
		</LayoutGrid>
	</div>
{/await}

<style>
	.containerCard {
		display: grid;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.typeIcon {
		width: 50px;
		margin-right: 5px;
	}
	* :global(.cardBlock) {
		padding: 20px;
		height: 650px;
	}
	.capitalize {
		text-transform: capitalize;
	}
	.inline {
		display: inline-block;
		margin-right: 15px;
	}
</style>
