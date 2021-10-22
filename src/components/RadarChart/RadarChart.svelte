<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import Chart from 'chart.js/auto';
	import { pokemonDetail } from '../../api/browser/pokemonDetail';

	export let id: number;

	let radar: any;
	let chartCanvas: any;
	let ctx: any;
	let pokemon: any;
	let statValue: any[] = [];
	let nameStat: any[] = [];

	function capitalize(word: string) {
		const lower = word.toLowerCase();
		return word.charAt(0).toUpperCase() + lower.slice(1);
	}

	afterUpdate(async () => {
		pokemonDetail(id).then((poke) => {
			poke.stats.map((stats: any) => {
				statValue.push(stats.base_stat);
				nameStat.push(capitalize(stats.stat.name));
			});
			console.log(statValue);
			console.log(nameStat);
			ctx = chartCanvas.getContext('2d');
			radar = new Chart(ctx, {
				type: 'polarArea',
				data: {
					labels: nameStat,
					datasets: [
						{
							label: 'Stats',
							data: statValue,
							backgroundColor: [
								'rgb(255, 99, 132, 0.7)',
								'rgb(75, 192, 192, 0.7)',
								'rgb(255, 205, 86, 0.7)',
								'rgb(201, 203, 207, 0.7)',
								'rgb(54, 162, 235, 0.7)',
								'rgb(255, 159, 64, 0.7)'
							],
							borderWidth: 0.5
						}
					]
				},
				options: {
					responsive: true,
					color: 'rgb(255, 159, 64)',
					plugins: {
						legend: {
							labels: {
								// This more specific font property overrides the global property
								font: {
									size: 14,
									weight: 'bold'
								}
							}
						}
					}
				}
			});
		});
	});

	onMount(() => {});
</script>

<main>
	<canvas id="grafica" width="200" height="200" bind:this={chartCanvas} />
</main>
