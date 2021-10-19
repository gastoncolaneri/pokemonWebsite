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
	import { regionDetail } from '../../api/browser/regionDetail';
	import Loader from '../../components/Loader/Loader.svelte';

	let regionInfo: any;

	let promise = regionDetail(parseInt($page.params.id));
</script>

{#await promise}
	<Loader />
{:then number}
	<p class="capitalize">{number.main_region.name}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.capitalize {
		text-transform: capitalize;
	}
</style>
