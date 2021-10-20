<script>
	import IconButton, { Icon } from '@smui/icon-button';
</script>

<footer id="footer">
	<a href="http://www.instagram.com" target="_blank">
		<i class="fab fa-instagram socialIcons" />
	</a>
	<a href="http://www.facebook.com" target="_blank"> <i class="fab fa-facebook socialIcons" /> </a>
	<a href="http://www.twitter.com" target="_blank"> <i class="fab fa-twitter socialIcons" /> </a>
</footer>

<style>
	#footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 36px 18px;
		border-top: 1px solid var(--mdc-theme-text-hint-on-background);
	}
	.socialIcons {
		font-size: 40px;
		margin: 20px;
		color: #ff3e00;
	}
</style>
