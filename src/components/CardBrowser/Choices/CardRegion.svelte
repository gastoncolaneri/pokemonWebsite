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
	import { busqueda } from '../../../stores/store';
	import { regions } from '../../../api/browser/regions';
	import Loader from '../../Loader/Loader.svelte';

	let regionesFilter: any[] = [];
	let regionesAPI: any[] = [];
	let filter: any[] = [];
	let flatLoader: boolean = true;

	onMount(() => {
		regions().then((region) => {
			regionesAPI = region;
			flatLoader = false;
		});
		filter = regionesAPI;
	});

	$: filter = regionesAPI;
	$: $busqueda;
	$: {
		regionesFilter = regionesAPI.filter((region: any) => region.nombre === $busqueda);
		if ($busqueda !== '' && regionesFilter.length !== 0) {
			filter = regionesFilter;
		} else {
			filter = regionesAPI;
		}
	}
</script>

<div class="card-container">
	{#if flatLoader}
		<Loader />
	{:else}
		<LayoutGrid>
			{#each filter as region}
				<Cell span={4}>
					<Card>
						<a href={`/region/${region.id}`} class="links">
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
	{/if}
</div>

<style>
	.links {
		text-decoration: none;
		color: #ff3e00;
	}
</style>
