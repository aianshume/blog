<script>
  import { stores } from '@sapper/app'
  const { page } = stores()
</script>

<nav>
  <a class="{page.path === '/' ? 'selected' : ''}" href=".">home</a>
  <a class="{page.path === '/about' ? 'selected' : ''}" href="about">About</a>
  <a rel="prefetch" class="{page.path === '/tags' ? 'selected' : ''}" href="tags">Tags</a>
</nav>
