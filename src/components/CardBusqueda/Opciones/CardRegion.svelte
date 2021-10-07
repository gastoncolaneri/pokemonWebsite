<script lang="ts">
	import Card, { PrimaryAction, Media, MediaContent } from '@smui/card';
	import ImageList, {
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label
	} from '@smui/image-list';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { onDestroy } from 'svelte';
	import { regiones } from '../../../stores/busquedaStore';
	import { busqueda } from '../../../stores/busquedaStore';

	let filter: any;
	$: {
		if ($busqueda !== '') {
			filter = $regiones.filter((region) => region == $busqueda).sort();
		} else {
			filter = $regiones.sort();
		}
	}

	onDestroy(() => {
		filter = 'holanda';
	});
</script>

<div class="card-container">
	<LayoutGrid>
		{#each filter as region}
			<Cell span={4}>
				<Card>
					<div style="padding: 1rem;">
						<h2 class="mdc-typography--button" style="margin: 0;">{region}</h2>
					</div>
					<PrimaryAction>
						<Image src={`/img/${region}.png`} alt="Image" aspectRatio="1x1" class="imgRegion" />
					</PrimaryAction>
				</Card>
			</Cell>
		{:else}
			<Cell span={12}>
				<Paper class="paper-demo">
					<Title>No se encontraron resultados que coincidan con tu búsqueda</Title>
				</Paper>
			</Cell>
		{/each}
	</LayoutGrid>
</div>

<style>
	* :global(.imgRegion) {
		max-height: 300px;
	}
</style>
