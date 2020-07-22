<script>
  import Nav from './Nav.svelte'
  import Container from './Container.svelte'
  import ThemeChanger from './ThemeChanger.svelte'
</script>

<header class="sticky top-0 py-4 my-8 bg-white">
  <Container>
    <div class="flex items-center">
      <Nav />
      <div class="ml-auto">
      <ThemeChanger />
      </div>
    </div>
  </Container>
</header>
