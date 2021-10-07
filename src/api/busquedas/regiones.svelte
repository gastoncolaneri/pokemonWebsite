<script lang="ts">
	import { regiones } from '../../stores/busquedaStore';

	const regionesAPI = () => {
		let regionesList: any = [];
		for (let i = 1; i < 9; i++) {
			const ajax = async () => {
				let response = await fetch(`https://pokeapi.co/api/v2/generation/${i}`);
				let json = await response.json();
				regionesList.push(json.main_region.name);
			};
			ajax();
		}
		return regionesList;
	};
</script>

{#await regionesAPI}
	<p>Cargando</p>
{:then regiones}
	<p>{regiones}</p>
{/await}
