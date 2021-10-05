<script lang="ts">
	let checked1 = false;
	import { switcher } from '../../stores/busquedaStore';
	import IconButton, { Icon } from '@smui/icon-button';

	const switchButton = () => {
		switcher.set(checked1);
	};
</script>

<main>
	<div>
		<IconButton toggle bind:pressed={checked1} on:click={switchButton}>
			<Icon class="material-icons" on>light_mode</Icon>
			<Icon class="material-icons">dark_mode</Icon>
		</IconButton>
	</div>
</main>
