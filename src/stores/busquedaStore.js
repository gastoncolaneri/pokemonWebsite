import { writable } from 'svelte/store';
export const regiones = writable([]);

let regionesAPI = [];

for (let i = 1; i < 9; i++) {
	const ajax = async () => {
		let response = await fetch(`https://pokeapi.co/api/v2/generation/${i}`);
		let json = await response.json();
		regionesAPI.push(json.main_region.name);
	};
	ajax();
	regiones.set(regionesAPI);
}

export const pokemon = writable('');
export const switcher = writable(true);
