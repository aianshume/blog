import { writable } from 'svelte/store'

export const LIGHT = 'light'
export const DARK = 'dark'

const THEME_KEY = 'theme'

export let theme

if (typeof window !== 'undefined') {
  theme = writable(localStorage.getItem(THEME_KEY) || LIGHT)
  theme.subscribe((value) => {
    document.body.classList.toggle(LIGHT, value === LIGHT)
    document.body.classList.toggle(DARK, value === DARK)
    localStorage.setItem(THEME_KEY, value)
  })
} else {
  theme = writable(LIGHT)
}
