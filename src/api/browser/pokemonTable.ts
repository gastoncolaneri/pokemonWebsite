// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function pokemonTable() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`);
	const res = await response.json();
	return res.results;
}
