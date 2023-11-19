<script lang="ts">
	import { onMount } from "svelte";
	import DbImage from "./DBImage.svelte";

	const dumpUrl = "https://raw.githubusercontent.com/zaneshaw/idleon-database-dumper/main/debug_dump.json";
	let dump: any[] = [];

	onMount(async () => {
		dump = (await fetch(dumpUrl).then((res) => res.json())).dump;
	});
</script>

{#if dump.length === 0}
	<span>Loading...</span>
{:else}
<div class="flex flex-wrap max-w-full gap-1.5">
	{#each dump as data}
		<DbImage {data} />
	{/each}
</div>
{/if}
