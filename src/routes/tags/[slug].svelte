<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/tags/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { tag: data.tag, posts: data.posts }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Container from '../../components/Container.svelte'
  import Posts from '../../components/Posts.svelte'

  export let tag
  export let posts
</script>

<Container>
  <h1 class="text-2xl font-bold">{tag.name}</h1>
  <Posts posts="{posts}" />
</Container>
