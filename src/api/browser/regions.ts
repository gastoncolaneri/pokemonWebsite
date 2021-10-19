// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function regions() {
	const regionesList = [];
	for (let i = 1; i < 9; i++) {
		const response = await fetch(`https://pokeapi.co/api/v2/generation/${i}`);
		const result = await response.json();
		regionesList.push({ nombre: result.main_region.name, id: result.id });
	}
	return regionesList;
}
