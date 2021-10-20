// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function pokemonDetail(index: number) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
	const res = await response.json();
	return res;
}
