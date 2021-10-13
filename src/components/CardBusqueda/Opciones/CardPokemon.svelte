<script lang="ts">
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';
	import Pokemon from '../../../api/busquedas/pokemonTabla.svelte';
</script>

<main style="height:100%">
	<Pokemon />
</main>
