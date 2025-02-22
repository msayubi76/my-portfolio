import { _ as _sfc_main$1 } from './GalleryImages-CCfAQlid.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { a as useRuntimeConfig } from './server.mjs';
import './useSwiper.client-DAjSbL4O.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/devalue/index.js';
import 'file://C:/xampp82/htdocs/my-portfolio/node_modules/ufo/dist/index.mjs';
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

const _imports_0 = publicAssetsURL("/videos/jdm-panel.mp4");
const _imports_1 = publicAssetsURL("/videos/jdm-website.mp4");
const _sfc_main = {
  __name: "jdm-trading",
  __ssrInlineRender: true,
  setup(__props) {
    const webImages = ref([]);
    const panelImages = ref([]);
    const config = useRuntimeConfig();
    for (let index = 0; index < 4; index++) {
      webImages.value.push({
        src: `${config.app.baseURL}images/jdm-${index}.png`
      });
    }
    for (let index = 4; index < 9; index++) {
      panelImages.value.push({
        src: `${config.app.baseURL}images/jdm-${index}.png`
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryImages = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="project"><div class="row"><div class="col-md-6"><h2>JDM Trading - Car Stock Management Website</h2><p><strong>Live Link</strong>: <a href="https://jdm-trading.com/" target="_blank">JDM Trading</a></p><p><strong>Technologies Used</strong>: Laravel, jQuery, Bootstrap 5</p><h3>Project Overview</h3><p> Developed <strong>JDM Trading</strong>, a car stock management website where users can view all available car stock with labels indicating whether the cars are reserved or available for sale. The website includes essential pages like <strong>Home</strong>, <strong>About</strong>, <strong>Stock List</strong>, and <strong>Contact</strong>. The <strong>admin panel</strong> allows administrators to manage stock category-wise, track expenses, manage sales, handle CNF (Cost and Freight), and update dynamic content for the website. </p></div><div class="col-md-6"><h4>Website</h4><video${ssrRenderAttr("src", _imports_0)} type="video/mp4" controls width="100%"></video>`);
      _push(ssrRenderComponent(_component_GalleryImages, { images: unref(webImages) }, null, _parent));
      _push(`</div></div><div class="row"><div class="col-md-6"><div><h4 class="mt-3">Admin Panel</h4><video${ssrRenderAttr("src", _imports_1)} type="video/mp4" controls width="100%"></video>`);
      _push(ssrRenderComponent(_component_GalleryImages, { images: unref(panelImages) }, null, _parent));
      _push(`</div></div><div class="col-md-6"><div class="p-3 bg-black mt-3"><h3>Key Features and Modules</h3><ol><li><strong>Website Features</strong>: <ul><li><strong>Home Page</strong>: Displays featured car stock and highlights.</li><li><strong>About Page</strong>: Provides information about the company and services. </li><li><strong>Stock List Page</strong>: Lists all available car stock with filters and search functionality.</li><ul><li>Each car listing includes details like make, model, year, price, and availability status (e.g., &quot;Available&quot; or &quot;Reserved&quot;).</li></ul><li><strong>Contact Page</strong>: Allows users to send inquiries or messages to the company. </li></ul></li><li><strong>Admin Panel Features</strong>: <ul><li><strong>Stock Management</strong>: Add, update, or remove car listings category-wise.</li><li><strong>Expense Management</strong>: Track and manage expenses related to car stock. </li><li><strong>Sales Management</strong>: Manage sales records and update sales status. </li><li><strong>CNF Management</strong>: Handle Cost and Freight details for each car. </li><li><strong>Dynamic Content Management</strong>: Update website content (e.g., banners, text, images) from the admin panel.</li><li><strong>Settings</strong>: Configure website settings and preferences.</li></ul></li></ol></div></div></div><h3>My Role and Contributions</h3><ul><li>Developed the <strong>frontend website</strong> using <strong>Bootstrap 5</strong> and <strong>jQuery</strong> for a responsive and user-friendly interface. </li><li>Built the <strong>admin panel</strong> using <strong>Laravel</strong> for managing car stock, expenses, sales, CNF, and dynamic content.</li><li>Implemented search and filter functionality for the <strong>Stock List Page</strong>.</li><li>Designed and developed the <strong>contact form</strong> and inquiry management system.</li><li>Ensured the website was optimized for performance and scalability.</li></ul><h3>Technologies Used</h3><ul><li><strong>Frontend</strong>: Bootstrap 5, jQuery</li><li><strong>Backend</strong>: Laravel, RESTful APIs</li><li><strong>Database</strong>: MySQL</li><li><strong>Version Control</strong>: Git</li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/jdm-trading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=jdm-trading-DlYnILrz.mjs.map
