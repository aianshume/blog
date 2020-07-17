<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => ({ posts }))
  }
</script>

<script>
  import Summary from '../components/Summary.svelte'
  export let posts
</script>

<svelte:head>
  <title>Devin Schulz</title>
  <meta
    name="description"
    content="Articles about React, JavaScript, testing, best practices,
    performance, and everything else related to front-end development."
  />
</svelte:head>

<div class="container">
  {#each posts as post}
    <Summary post="{post}" />
  {/each}
</div>
