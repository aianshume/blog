<script>
  import { stores } from '@sapper/app'
  const { page } = stores()
</script>

<nav class="space-x-2">
  <a class:selected="{page.path === '/'}" href=".">Home</a>
  <a class:selected="{page.path === '/about'}" href="about">About</a>
  <a rel="prefetch" class:selected="{page.path === '/tags'}" href="tags">Tags</a>
</nav>
