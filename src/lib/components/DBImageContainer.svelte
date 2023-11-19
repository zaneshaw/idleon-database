<script lang="ts">
	import { onMount } from "svelte";
	import DbImage from "./DBImage.svelte";

	// TODO: Cache dump in store
	const dumpUrl = "https://raw.githubusercontent.com/zaneshaw/idleon-database-dumper/main/dump.json";
	let dump: any[] = [];

	onMount(async () => {
		dump = (await fetch(dumpUrl).then((res) => res.json())).dump;
	});
</script>

{#if dump.length === 0}
	<span>Loading...</span>
{:else}
	<div class="flex justify-center flex-wrap w-fit gap-1.5">
		{#each dump as data}
			<DbImage {data} />
		{/each}
	</div>
{/if}
