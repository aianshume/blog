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
  import TableOfContents from '../components/TableOfContents.svelte'

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
    <h1 class="text-5xl font-bold">{post.title}</h1>
  </header>
  <div class="grid grid-cols-12">
    <article class="prose col-span-8">
      {@html post.html}
    </article>
    <div class="col-span-3 col-start-10">
      <div class="sticky top-0">
        <TableOfContents tableOfContents="{post.tableOfContents}" />
      </div>
    </div>
  </div>
  {#if post.previous}
    <a href="/{post.previous.slug}" rel="prefetch">
      <h2>{post.previous.title}</h2>
    </a>
  {/if}
  {#if post.next}
    <a href="/{post.next.slug}" rel="prefetch">
      <h2>{post.next.title}</h2>
    </a>
  {/if}
</Container>
