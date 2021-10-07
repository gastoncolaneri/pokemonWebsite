<script lang="ts">
	let pokemonList = [];
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	let pokemon = ajax();
	async function ajax() {
		let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
		let json = await response.json();
		//pokemonList.push(json.main_region.name);
		console.log(json.results);
		return json.results;
	}
</script>

{#await pokemon}
	<p>Cargando</p>
{:then pok}
	{#each pok as item, i}
		<Row>
			<Cell numeric>{i + 1}</Cell>
			<Cell>{item.name}</Cell>
		</Row>
	{/each}
{/await}
