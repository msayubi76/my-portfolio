import type PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export interface LightboxSlide {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
}

// PhotoSwipe is loaded only in the browser, on first open, so it adds nothing to the
// prerendered HTML and works the same after `nuxt generate`.
export function useLightbox(slides: MaybeRefOrGetter<LightboxSlide[]>) {
  let lightbox: PhotoSwipeLightbox | null = null

  const create = async () => {
    const { default: Lightbox } = await import('photoswipe/lightbox')
    const instance = new Lightbox({
      dataSource: toValue(slides).map(slide => ({ ...slide, msrc: slide.src })),
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.96,
      wheelToZoom: true,
      padding: { top: 24, bottom: 72, left: 16, right: 16 },
      closeTitle: 'Close (Esc)',
      zoomTitle: 'Zoom',
      arrowPrevTitle: 'Previous',
      arrowNextTitle: 'Next'
    })

    instance.on('uiRegister', () => {
      instance.pswp?.ui?.registerElement({
        name: 'caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        onInit: (el, pswp) => {
          el.setAttribute('aria-live', 'polite')
          const update = () => { el.textContent = (pswp.currSlide?.data as LightboxSlide | undefined)?.caption ?? '' }
          pswp.on('change', update)
          update()
        }
      })
    })

    instance.init()
    return instance
  }

  const open = async (index: number) => {
    lightbox ??= await create()
    lightbox.loadAndOpen(index)
  }

  const reset = () => {
    lightbox?.destroy()
    lightbox = null
  }

  // The same page component is reused when navigating between case studies.
  watch(() => toValue(slides), reset)
  onBeforeUnmount(reset)

  return { open }
}
