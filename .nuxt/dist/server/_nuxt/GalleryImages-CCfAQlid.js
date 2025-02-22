import { useSSRContext, ref, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "lightgallery/plugins/zoom/lg-zoom.es5.js";
import { u as useSwiper } from "./useSwiper.client-DAjSbL4O.js";
const _sfc_main = {
  __name: "GalleryImages",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: Array
    }
  },
  setup(__props) {
    const containerRef = ref(null);
    useSwiper(containerRef, {
      effect: "creative",
      loop: true,
      autoplay: {
        delay: 1e3
      },
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: true,
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400]
        },
        next: {
          shadow: true,
          translate: [0, 0, -400]
        }
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3
        },
        // when window width is >= 640px
        400: {
          slidesPerView: 4
        },
        // when window width is >= 1200
        1200: {
          slidesPerView: 3
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "gallery-container d-flex align-items-center justify-content-center row",
        id: "gallery-container"
      }, _attrs))}><swiper-container><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(`<swiper-slide class="gallery-item"><a${ssrRenderAttr("href", image.src)}${ssrRenderAttr("data-src", image.src)}><img${ssrRenderAttr("src", image.src)} class="img-fluid" style="${ssrRenderStyle({ "max-height": "240px" })}"></a></swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=GalleryImages-CCfAQlid.js.map
