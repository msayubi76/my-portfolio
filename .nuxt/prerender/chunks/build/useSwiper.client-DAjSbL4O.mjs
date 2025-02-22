import { computed, watch } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/index.mjs';

function useSwiper(swiperContainerRef, options) {
  const swiper = computed(() => {
    var _a2;
    var _a;
    return (_a2 = (_a = swiperContainerRef == null ? undefined : swiperContainerRef.value) == null ? undefined : _a.swiper) != null ? _a2 : null;
  });
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else
      swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else
      swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else
      swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    var _a;
    const isSwiperContainer = ((_a = swiperContainerRef.value) == null ? undefined : _a.nodeName) === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    instance: swiper,
    next,
    prev,
    to,
    reset
  };
}

export { useSwiper as u };
//# sourceMappingURL=useSwiper.client-DAjSbL4O.mjs.map
