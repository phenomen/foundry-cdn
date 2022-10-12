<script>
  export let dir;
  export let assets;

  const extImages = ["webp", "jpeg", "jpg", "png"];
  const extSounds = ["mp3", "ogg", "wav"];
  const extVideos = ["mp4", "webm"];
</script>

{#each assets as asset}
  {@const ext = asset.slice(
    (Math.max(0, asset.lastIndexOf(".")) || Infinity) + 1
  )}
  {@const encodedName = encodeURIComponent(asset.trim())}
  {@const url = "/assets/" + dir + "/" + encodedName}

  {#if extImages.includes(ext)}
    <a href={url} target="_blank" class="asset">
      <span class="m-1">{asset}</span>
      <div
        class="w-32 h-20 bg-cover bg-center"
        style="background-image: url({url});"
      />
    </a>
  {:else if extSounds.includes(ext)}
    <a href={url} target="_blank" class="asset">
      <span class="m-1">{asset}</span>
      <audio controls>
        <source src={url} type="audio/{ext}" />
      </audio>
    </a>
  {:else}
    <a href={url} target="_blank" class="asset">
      <span class="m-1">{asset}</span>
    </a>
  {/if}
{/each}

<style>
  a {
    @apply text-blue-600 hover:text-white;
  }
  .asset {
    @apply flex flex-row items-center rounded border hover:bg-blue-600 border-blue-600 justify-between;
  }
  audio::-webkit-media-controls-panel {
    @apply bg-white rounded-none;
  }
</style>
