<script>
  import Tag from './Tag.svelte'
  export let post
</script>

<article class="space-y-4">
  <h2 class="text-2xl font-bold">
    <a rel="prefetch" href="/{post.slug}">{post.title}</a>
  </h2>
  <div class="prose">
    {@html post.excerpt}
  </div>
  <div class="flex space-x-4 font-sm">
    <span>{post.printDate}</span>
    <ul>
      {#each post.tags as tag}
        <li class="inline-block">
          <Tag tag="{tag}" />
        </li>
      {/each}
    </ul>
  </div>
</article>
