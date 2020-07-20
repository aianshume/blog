<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Container from '../components/Container.svelte'
  import Tag from '../components/Tag.svelte'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Container>
  <header>
    {#each post.tags as tag}
      <Tag tag="{tag}" />
    {/each}
    <p>{post.printDate} ~ {post.printReadingTime}</p>
    <h1 class="text-xl">{post.title}</h1>
    <hr />
  </header>
  <article class="prose">
    {@html post.html}
  </article>
  {#if post.previous}
    <div>
      <a href="/{post.previous.slug}" rel="prefetch">
        <h2>{post.previous.title}</h2>
      </a>
    </div>
  {/if}
  {#if post.next}
    <div>
      <a href="/{post.next.slug}" rel="prefetch">
        <h2>{post.next.title}</h2>
      </a>
    </div>
  {/if}
</Container>
