<script lang="ts">
	import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';
	import ImageList, {
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label
	} from '@smui/image-list';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Generacion from '../../../api/busquedas/generacion.svelte';
	import { regiones } from '../../../stores/busquedaStore';
</script>

<Generacion />
<div class="card-container">
	<LayoutGrid>
		{#each $regiones as region}
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
		{/each}
	</LayoutGrid>
</div>

<style>
	* :global(.imgRegion) {
		max-height: 300px;
	}
</style>
