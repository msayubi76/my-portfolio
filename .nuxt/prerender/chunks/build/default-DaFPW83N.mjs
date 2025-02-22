import { _ as __nuxt_component_0 } from './nuxt-link-9qLb5Ud6.mjs';
import { useSSRContext, ref, watch, mergeProps, withCtx, createTextVNode, unref } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc, b as useRoute } from './server.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/devalue/index.js';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unhead/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/xampp82/htdocs/my-portfolio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0$1 = publicAssetsURL("/images/download.svg");
const _sfc_main$3 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const activeHash = ref("");
    const updateActiveHash = () => {
      activeHash.value = (undefined).location.hash;
    };
    watch(() => route.fullPath, updateActiveHash);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg navbar-dark bg-dark" }, _attrs))}><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mx-auto mb-2 mb-lg-0"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#top-section" }],
        href: "/#top-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#about-section" }],
        href: "/#about-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#services-section" }],
        href: "/#services-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#skills-section" }],
        href: "/#skills-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Skills`);
          } else {
            return [
              createTextVNode("Skills")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#projects-section" }],
        href: "/#projects-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["nav-link px-3", { active: activeHash.value === "#contact-section" }],
        href: "/#contact-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank" class="btn btn-primary text-white btn-sm d-none d-md-block"> Download CV <img${ssrRenderAttr("src", _imports_0$1)} alt=""></a></div></div><a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank" class="btn btn-primary text-white btn-sm d-block d-lg-none position-absolute end-0 top-0 mt-2"> Download CV <img${ssrRenderAttr("src", _imports_0$1)} alt=""></a></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<h4${ssrRenderAttrs(_attrs)}></h4>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/images/up-arrow.svg");
const _sfc_main$1 = {
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const showButton = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(showButton)) {
        _push(`<button${ssrRenderAttrs(mergeProps({ class: "scroll-to-top" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} height="30px"></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$3;
  const _component_AppFooter = __nuxt_component_1;
  const _component_ScrollToTop = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_ScrollToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DaFPW83N.mjs.map
