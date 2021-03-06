<script lang="ts">
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';
	import Button from '@smui/button/Button.svelte';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { pokemonTable } from '../../../api/browser/pokemonTable';
	import { busqueda, pokemon } from '../../../stores/store';
	import Loader from '../../Loader/Loader.svelte';

	let items: number = 1118;
	let rowsPerPage = 10;
	let currentPage = 0;
	let start = 0;
	let pokemonFilter: any;
	let flat: boolean = true;
	let flatLoader: boolean = true;
	let pokemonMostrar: any[] = [];
	let indice: any[] = [];

	onMount(() => {
		pokemonTable().then((poke) => {
			pokemon.set(poke);
			pokemonMostrar = poke;
			pokemonMostrar.map((pok: any) =>
				indice.push({ nombre: pok.name, id: pokemonMostrar.indexOf(pok) + 1 })
			);
			flatLoader = false;
		});
	});

	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, pokemonMostrar.length);
	$: slice = pokemonMostrar.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items / rowsPerPage) - 1, 0);
	$: $busqueda;
	$: {
		rowsPerPage;
		pokemonFilter = indice.filter((pok: any) => pok.nombre === $busqueda);
		if ($busqueda !== '' && pokemonFilter[0] && pokemonFilter[0].nombre === $busqueda) {
			console.log(pokemonFilter);
			flat = false;
			slice = pokemonFilter;
		} else {
			flat = true;
			slice = pokemonMostrar.slice(start, end);
		}
	}
</script>

<main style="height:100%">
	{#if flatLoader}
		<div class="card-container">
			<Loader />
		</div>
	{:else}
		<DataTable style="height: 100%">
			<Head />
			<Body>
				{#each slice as item, i}
					{#if flat}
						<Row>
							<Cell numeric>{i + start + 1}</Cell>
							<Cell><p class="capitalize">{item.name}</p></Cell>
							<Cell>
								{#if i + start + 1 < 899}
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{i +
											start +
											1}.png"
										alt="Imagen no encontrada"
										class="imgPokemon"
									/>
								{:else}
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{i +
											start +
											1 +
											9102}.png"
										alt="Imagen no encontrada"
										class="imgPokemon"
									/>
								{/if}
							</Cell>
							<Cell>
								<a href={`/pokemon/${i + start + 1}`} class="links icons">
									<IconButton class="material-icons">info</IconButton></a
								>
							</Cell>
						</Row>
					{:else}
						<Row>
							<Cell numeric>{item.id}</Cell>
							<Cell><p class="capitalize">{item.nombre}</p></Cell>
							<Cell>
								{#if item.id < 899}
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{item.id}.png"
										alt="Imagen no encontrada"
										class="imgPokemon"
									/>
								{:else}
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{item.id +
											+9102}.png"
										alt="Imagen no encontrada"
										class="imgPokemon"
									/>
								{/if}
							</Cell>
							<Cell>
								<a href={`/pokemon/${item.id}`} class="links icons">
									<IconButton class="material-icons">info</IconButton>
								</a>
							</Cell>
						</Row>
					{/if}
				{:else}
					<p>Hola</p>
				{/each}
			</Body>

			<Pagination slot="paginate">
				<svelte:fragment slot="rowsPerPage">
					<Label>Rows Per Page</Label>
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
	{/if}
</main>

<style>
	.capitalize {
		text-transform: capitalize;
	}
	.links {
		text-decoration: none;
		color: #ff3e00;
	}
	.imgPokemon {
		width: 100px;
	}
</style>
