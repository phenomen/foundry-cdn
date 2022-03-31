<script>
  export let dirs = [];
</script>

<ul>
  {#each dirs as dir}
    <li>
      > <a
        class="text-blue-600 hover:underline hover:text-blue-400"
        href="/{dir}">{dir}</a
      >
    </li>
  {/each}
</ul>
