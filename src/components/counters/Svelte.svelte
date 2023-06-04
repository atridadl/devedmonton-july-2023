<script>
  let count = 0;
</script>

<div class="flex flex-row flex-wrap gap-8 text-6xl text-orange-500">
  <button on:click="{() => (count -= 1)}">-</button>
  <span>{count}</span>
  <button on:click="{() => (count += 1)}">+</button>
</div>
