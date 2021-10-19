// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function regionDetail(index: number) {
	const response = await fetch(`https://pokeapi.co/api/v2/generation/${index}`);
	const regionDetalle = await response.json();
	return regionDetalle;
}
