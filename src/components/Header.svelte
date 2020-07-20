<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
</script>

<header>
  <Logo />
  <Nav />
</header>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
  }
</style>
