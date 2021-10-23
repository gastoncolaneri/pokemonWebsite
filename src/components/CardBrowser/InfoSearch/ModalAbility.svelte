<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';

	export let abilityInfo: any;
	let open = false;
</script>

<Dialog
	bind:open
	fullscreen
	aria-labelledby="fullscreen-title"
	aria-describedby="fullscreen-content"
>
	<Header>
		<Title id="fullscreen-title">Terms and Conditions</Title>
		<IconButton action="close" class="material-icons">close</IconButton>
	</Header>
	<Content id="fullscreen-content">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, facere adipisci minus
		corporis placeat facilis. Sint consequuntur pariatur nostrum dignissimos illum quis voluptates.
		Voluptatibus corporis reiciendis debitis! Doloribus, optio numquam.
	</Content>
	<Actions>
		<Button action="reject">
			<Label>Reject</Label>
		</Button>
		<Button action="accept" defaultAction>
			<Label>Accept</Label>
		</Button>
	</Actions>
</Dialog>

<Button on:click={() => (open = true)}>
	<Label>Open Dialog</Label>
</Button>
