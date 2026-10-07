type PortfolioTheme = 'light' | 'dark'

const COOKIE = 'portfolio-theme'

// The initial theme is applied by an inline <head> script (see nuxt.config.ts) before first paint,
// so static/prerendered pages never flash the wrong theme. This composable only syncs with it.
export function useTheme() {
  const theme = useState<PortfolioTheme>('portfolio-theme', () => 'light')
  const isLight = computed(() => theme.value !== 'dark')

  onMounted(() => {
    theme.value = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    const next: PortfolioTheme = isLight.value ? 'dark' : 'light'
    theme.value = next
    const root = document.documentElement
    root.classList.toggle('theme-dark', next === 'dark')
    root.dataset.theme = next
    document.cookie = `${COOKIE}=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
  }

  return { isLight, toggleTheme }
}
