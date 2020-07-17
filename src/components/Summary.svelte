<script>
  export let post
</script>

<div>
  <h2>
    <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
  </h2>
  <p>{post.excerpt}</p>
  <span>{post.printDate}</span>
</div>
