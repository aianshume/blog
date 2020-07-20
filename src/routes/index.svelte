<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => ({ posts }))
  }
</script>

<script>
  import Container from '../components/Container.svelte'
  import Posts from '../components/Posts.svelte'

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

<Container>
  <Posts posts="{posts}" />
</Container>
