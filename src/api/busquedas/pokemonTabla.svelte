<script lang="ts">
	let pokemonList = [];
	import DataTable, { Head, Body, Row, Cell, Pagination, Label } from '@smui/data-table';
	import IconButton from '@smui/icon-button/IconButton.svelte';
	import Option from '@smui/select/Option.svelte';
	import Select from '@smui/select/Select.svelte';
	import { busqueda } from '../../stores/busquedaStore';
	import CircularProgress from '@smui/circular-progress';

	let items: number = 1118;
	let rowsPerPage = 10;
	let currentPage = 0;

	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, items);
	//$: slice = items.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items / rowsPerPage) - 1, 0);

	//$: if (currentPage > lastPage) {
	//	currentPage = lastPage;
	//}
	let pokemon: any;
	$: {
		rowsPerPage;
		pokemon = ajax();
		async function ajax() {
			let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${items}`);
			let json = await response.json();
			let pokemonFilter = json.results.filter((pokemon: any) => pokemon.name == $busqueda);
			if ($busqueda !== '' && pokemonFilter.length !== 0) {
				console.log(pokemonFilter.length === 0);
				return pokemonFilter;
			} else {
				return json.results.slice(start, end);
			}
		}
	}
</script>

<DataTable style="height: 100%">
	<Head />
	<Body>
		{#await pokemon}
			<div style="display: flex; justify-content: center">
				<CircularProgress style="height: 32px; width: 32px;" indeterminate />
			</div>
		{:then pok}
			{#each pok as item, i}
				<Row>
					<Cell numeric>{i + start + 1}</Cell>
					<Cell>{item.name}</Cell>
					<Cell>
						{#if i + start + 1 < 899}
							<img
								src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{i +
									start +
									1}.png"
								alt="Imagen no encontrada"
							/>
						{/if}
					</Cell>
				</Row>
			{/each}
		{/await}
	</Body>

	<Pagination slot="paginate">
		<svelte:fragment slot="rowsPerPage">
			<Label>Filas a mostrar</Label>
			<Select variant="outlined" bind:value={rowsPerPage} noLabel>
				<Option value={10}>10</Option>
				<Option value={25}>25</Option>
				<Option value={50}>50</Option>
			</Select>
		</svelte:fragment>
		<svelte:fragment slot="total">
			{start + 1}-{end} of {items}
		</svelte:fragment>

		<IconButton
			class="material-icons"
			action="first-page"
			title="First page"
			on:click={() => (currentPage = 0)}
			disabled={currentPage === 0}>first_page</IconButton
		>
		<IconButton
			class="material-icons"
			action="prev-page"
			title="Prev page"
			on:click={() => currentPage--}
			disabled={currentPage === 0}>chevron_left</IconButton
		>
		<IconButton
			class="material-icons"
			action="next-page"
			title="Next page"
			on:click={() => currentPage++}
			disabled={currentPage === lastPage}>chevron_right</IconButton
		>
		<IconButton
			class="material-icons"
			action="last-page"
			title="Last page"
			on:click={() => (currentPage = lastPage)}
			disabled={currentPage === lastPage}>last_page</IconButton
		>
	</Pagination>
</DataTable>
