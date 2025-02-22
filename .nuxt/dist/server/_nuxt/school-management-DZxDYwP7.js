import { _ as _sfc_main$1 } from "./GalleryImages-CCfAQlid.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { a as useRuntimeConfig } from "../server.mjs";
import "lightgallery/plugins/zoom/lg-zoom.es5.js";
import "./useSwiper.client-DAjSbL4O.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _imports_0 = publicAssetsURL("/videos/school-management-system.mp4");
const _sfc_main = {
  __name: "school-management",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const images = ref([
      {
        src: config.app.baseURL + "images/project.png"
      },
      {
        src: config.app.baseURL + "images/school-management.png"
      },
      {
        src: config.app.baseURL + "images/team-work.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryImages = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="project"><div class="row"><div class="col-md-6"><h2>School Management System</h2><p><strong>Technologies Used</strong>: Laravel, jQuery, Bootstrap</p><h3>Project Overview</h3><p> Developed a comprehensive <strong>School Management System</strong> for a local school to streamline administrative tasks, student records, and academic management. The system includes modules for staff and student registration, academic details, fee management, admissions, expense tracking, and certificate generation. Built with <strong>Laravel</strong> for the backend and <strong>jQuery</strong> and <strong>Bootstrap</strong> for the frontend, the platform ensures efficiency and transparency in school operations. </p></div><div class="col-md-6"><video${ssrRenderAttr("src", _imports_0)} controls width="100%"></video>`);
      _push(ssrRenderComponent(_component_GalleryImages, { images: unref(images) }, null, _parent));
      _push(`</div></div><h3>Key Features and Modules</h3><ol><li><strong>Staff Registration</strong>: <ul><li>Add, update, and delete staff records.</li></ul></li><li><strong>Student Registration</strong>: <ul><li>Add and update student records.</li></ul></li><li><strong>Academic Details</strong>: <ul><li>Manage class details, sections, and subjects.</li><li>View complete class details, including student attendance.</li></ul></li><li><strong>Fee Management</strong>: <ul><li>Manage academic fees, admission fees, and examination fees.</li><li>With Search filters admission number, class, section, fee status, and fee month.</li></ul></li><li><strong>Admission Management</strong>: <ul><li>Add, update, and delete admission forms.</li></ul></li><li><strong>Expense Management</strong>: <ul><li>Add, update, and delete expenses.</li><li>View total expenses with a search-by-date filter.</li></ul></li><li><strong>Certificate Management</strong>: <ul><li>Generate and manage certificates:</li><ul><li><strong>Hope Certificate</strong></li><li><strong>Character Certificate</strong></li></ul></ul></li></ol><h3>Technologies Used</h3><ul><li><strong>Frontend</strong>: Bootstrap, jQuery</li><li><strong>Backend</strong>: Laravel</li><li><strong>Database</strong>: MySQL</li><li><strong>Deployment</strong>: Shared, CPanel</li><li><strong>Version Control</strong>: Git</li></ul><h3>Impact</h3><ul><li>Streamlined school operations, reducing administrative workload by 40%.</li><li>Improved record-keeping and transparency in fee and expense management.</li><li>Enhanced efficiency in managing student and staff records.</li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/school-management.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=school-management-DZxDYwP7.js.map
