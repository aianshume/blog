<script>
  import Summary from './Summary.svelte'
  export let posts
</script>

<div class="space-y-10">
  {#each posts as post}
    <Summary post="{post}" />
  {/each}
</div>
