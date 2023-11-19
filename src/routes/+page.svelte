<script>
	import DbImageContainer from "$lib/components/DBImageContainer.svelte";
</script>

<main class="w-1/2 mx-auto gap-6 flex flex-col py-6">
	<div class="text-center">
		<h1>Welcome to Idleon Database</h1>
		<h2 class="italic">Warning: Below is a list of images scraped from the <a href="https://idleon.wiki/">IdleOn Wiki</a>. Not all images are guaranteed to be sourced from the game itself.</h2>
	</div>

	<DbImageContainer />
</main>