<script>
  import { stores } from '@sapper/app'
  const { preloading, page, session } = stores()
</script>

<nav>
  <a class="{page.path === '/' ? 'selected' : ''}" href=".">home</a>
  <a class="{page.path === '/about' ? 'selected' : ''}" href="about">about</a>
</nav>
