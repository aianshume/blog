<script>
  import { onMount, onDestroy } from 'svelte'

  export let tableOfContents

  let observer
  let sections = []
  let actives = {}

  function scrollTo({ target }) {
    document.querySelector(target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  }

  onMount(() => {
    sections = Array.from(document.querySelectorAll('.section'))
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.id
        if (id) actives[id] = entry.intersectionRatio > 0
      })
    })
    sections.forEach((section) => {
      observer.observe(section)
    })
  })

  onDestroy(() => {
    sections.forEach((section) => {
      observer.unobserve(section)
    })
  })
</script>

<aside>
  <h2 class="text-sm">Contents</h2>
  <nav>
    <ul>
      {#each tableOfContents as contents}
        <li class:text-blue-500="{actives[contents.slug]}">
          <a href="#{contents.slug}" on:click|preventDefault="{scrollTo}">
            {contents.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>
