<script>
  import Header from '../components/Header.svelte'
</script>

<div class="layout">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
  </footer>
</div>

