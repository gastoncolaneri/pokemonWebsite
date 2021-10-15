// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function regiones(index: number) {
	const response = await fetch(`https://pokeapi.co/api/v2/generation/${index}`);
	const result = await response.json();
	return result;
}
