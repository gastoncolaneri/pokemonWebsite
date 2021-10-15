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
	import { onMount, beforeUpdate, afterUpdate, tick } from 'svelte';
	import { busqueda } from '../../../stores/busquedaStore';
	import { regiones } from '../../../api/busquedas/regiones';

	let regionesList: any = [];
	let regionesFilter: any;
	let regionesAPI: any;

	onMount(async () => {
		for (let i = 1; i < 9; i++) {
			regiones(i).then((region) => {
				regionesList.push({ nombre: region.main_region.name, id: region.id });
			});
		}
		filter = regionesList.sort((a: any, b: any) => {
			return a.id - b.id;
		});
		console.log('onMount', filter);
	});

	$: filter = regionesList.sort((a: any, b: any) => {
		return a.id - b.id;
	});
	$: $busqueda;
	$: {
		regionesFilter = regionesList.filter((region: any) => region.nombre === $busqueda);
		if ($busqueda !== '' && regionesFilter.length !== 0) {
			filter = regionesFilter;
		} else {
			filter = regionesList.sort((a: any, b: any) => {
				return a.id - b.id;
			});
		}
	}
</script>

<div class="card-container">
	<LayoutGrid>
		{#each filter as region}
			<Cell span={4}>
				<Card>
					<a href="/buscador/region/1" class="links">
						<div style="padding: 1rem;">
							<div class="mdc-typography--button" style="margin: 0;">
								<strong>{region.nombre}</strong>
							</div>
						</div>
						<PrimaryAction>
							<Image
								src={`/img/${region.nombre}.png`}
								alt="Image"
								aspectRatio="1x1"
								style="max-height: 300px"
							/>
						</PrimaryAction>
					</a>
				</Card>
			</Cell>
		{/each}
	</LayoutGrid>
</div>

<style>
	.links {
		text-decoration: none;
		color: #ff3e00;
	}
</style>
