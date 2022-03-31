<script>
  import { readdirSync } from "node:fs";
  export let dir;
  const assets = readdirSync("./public/assets/" + dir + "/");
</script>

<h1 class="font-medium text-xl my-10 uppercase">{dir}</h1>
<div class="grid grid-cols-3 gap-4">
  {#each assets as asset}
    <div
      class="bg-gray-100 rounded py-2 flex flex-col text-center justify-items-center"
    >
      <a href="assets/{dir}/{asset}" class="mx-auto">
        <img src="assets/{dir}/{asset}" alt={asset} class="w-24 h-24" />
      </a>
      <span class="text-sm">{asset.split(".").slice(0, -1).join(".")}</span>
    </div>
  {/each}
</div>
