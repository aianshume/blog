<script context="module">
  export async function preload() {
    const res = await this.fetch(`tags/tags.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { tags: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Container from '../../components/Container.svelte'
  import Tag from '../../components/Tag.svelte'

  export let tags
</script>

<Container>
  <h1>Tags</h1>
  <ul>
    {#each tags as tag}
      <li>
        <Tag tag="{tag}" />
      </li>
    {/each}
  </ul>
</Container>
