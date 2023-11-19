<script lang="ts">
	export let data: any; // name, timestamp, url
	export let pixelated: boolean = false;
</script>

<div class="ring-1 ring-[#8c3c9a] rounded overflow-clip hover:scale-125 transition-transform bg-[#222230] cursor-pointer">
	<img src={data.url} alt={data.name} title={data.name} class="{pixelated && "pixelated"} w-[56px] aspect-square object-cover flex-1" />
</div>
