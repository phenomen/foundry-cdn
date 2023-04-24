<script>
  export let dir;
  export let assets;

  const site = import.meta.env.SITE;

  const extImages = ["webp", "jpeg", "jpg", "png"];
  const extSounds = ["mp3", "ogg", "wav"];
  const extVideos = ["mp4", "webm"];
</script>

{#each assets as asset}
  {@const ext = asset.slice((Math.max(0, asset.lastIndexOf(".")) || Infinity) + 1)}
  {@const encodedName = encodeURIComponent(asset.trim())}
  {@const localurl = "/assets/" + dir + "/" + encodedName}
  {@const publicurl = site + "/assets/" + dir + "/" + encodedName}

  {#if ext !== ""}
    <div class="flex flex-row items-center rounded border border-black justify-between text-sm">
      <input
        readonly
        onclick="select()"
        value={publicurl}
        class="flex-1 m-1 p-1 focus:outline-none border-b border-black"
      />
      <a href={localurl} target="_blank" class="text-black hover:text-gray-600 px-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
          />
          <path
            d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
          />
        </svg>
      </a>
      {#if extImages.includes(ext)}
        <div class="w-32 h-20 bg-cover bg-center" style="background-image: url({localurl});" />
      {:else if extSounds.includes(ext)}
        <audio controls class="bg-white rounded-none">
          <source src={localurl} type="audio/{ext}" />
        </audio>
      {/if}
    </div>
  {:else}
    <a
      class="text-black p-2 rounded border hover:text-white hover:bg-black border-black"
      href={"/" + dir + "/" + asset}
    >
      / {asset}
    </a>
  {/if}
{/each}
