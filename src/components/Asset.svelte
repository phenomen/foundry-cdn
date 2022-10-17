<script>
  export let dir;
  export let assets;

  const site = import.meta.env.SITE;

  const extImages = ["webp", "jpeg", "jpg", "png"];
  const extSounds = ["mp3", "ogg", "wav"];
  const extVideos = ["mp4", "webm"];
</script>

{#each assets as asset}
  {@const ext = asset.slice(
    (Math.max(0, asset.lastIndexOf(".")) || Infinity) + 1
  )}
  {@const encodedName = encodeURIComponent(asset.trim())}
  {@const localurl = "/assets/" + dir + "/" + encodedName}
  {@const publicurl = site + "assets/" + dir + "/" + encodedName}

  <div class="asset">
    <input readonly onclick="select()" value={publicurl} />
    <a href={localurl} target="_blank"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    </a>
    {#if extImages.includes(ext)}
      <div
        class="w-32 h-20 bg-cover bg-center"
        style="background-image: url({localurl});"
      />
    {:else if extSounds.includes(ext)}
      <audio controls>
        <source src={localurl} type="audio/{ext}" />
      </audio>
    {/if}
  </div>
{/each}

<style>
  a {
    @apply text-blue-600 hover:text-blue-800 px-2;
  }
  .asset {
    @apply flex flex-row items-center rounded border border-blue-600 justify-between text-sm;
  }
  audio::-webkit-media-controls-panel {
    @apply bg-white rounded-none;
  }
  input {
    @apply flex-1 m-1 p-1 focus:outline-none border-b border-blue-600;
  }
</style>
