<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	let enlarged: boolean;
</script>

<a href="/" class="absolute top-7 left-8 text-xl">Back</a>
<h1>{data.name}</h1>
<div>
	<div class="flex justify-center">
		<img src={data.url} alt={data.name} title={data.name} class={enlarged ? "w-2/3 pixelated" : ""} />
	</div>
	<button on:click={() => (enlarged = !enlarged)} class="link">[{enlarged ? "Original" : "Enlarge"}]</button>
</div>
