import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { useSSRContext, mergeProps, computed, ref, unref, withCtx, createVNode, toDisplayString } from 'file://C:/xampp82/htdocs/my-portfolio/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
import { u as useSwiper } from './useSwiper.client-DAjSbL4O.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-9qLb5Ud6.mjs';
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

const _imports_1$1 = publicAssetsURL("/images/linkedin.png");
const _imports_3 = publicAssetsURL("/images/stack-overflow.png");
const _imports_2$2 = publicAssetsURL("/images/salahuddin-1.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="row pt-md-3 bg-dark" id="top-section"><div class="col-md-8"><div class="about-image"><div class="about-top"><h2>Salah-ud-Din</h2><h3>Islamabad, Pakistan</h3><ul class="text-light" style="${ssrRenderStyle({ "list-style": "none" })}"><li>\u{1F680} <b>Designing and developing</b> scalable, high-performance web applications.</li><li>\u{1F4BB} <b>Experienced in</b> Laravel, Vue.js, AWS, and API development.</li><li>\u{1F3C6} <b>Delivering maintainable</b>, high-quality solutions that stand the test of time.</li><li class="d-none d-sm-block">\u{1F6E0}\uFE0F <b>Thoroughly testing</b> to ensure bug-free, efficient, and seamless experiences.</li><li class="d-none d-sm-block">\u{1F3AF} <b>Solving complex problems</b> and guiding teams to success.</li></ul></div><div class="name-image"><ul class="list-group list-group-horizontal position-absolute bottom-0"><li class="list-group-item border-0 py-0 px-1 ps-0"><a href="https://www.linkedin.com/in/msayubi76/" target="_blank" title="LinkedIn"><img${ssrRenderAttr("src", _imports_1$1)} alt="" height="22px"></a></li><li class="list-group-item border-0 py-0 px-1"><a href="https://stackoverflow.com/users/10255904/msayubi76" target="_blank" title="Stack Overflow"><img${ssrRenderAttr("src", _imports_3)} alt="" height="22px"></a></li></ul><div class="row justify-content-end"><div class="col-7"><img${ssrRenderAttr("src", _imports_2$2)} class="img-fluid" alt=""></div></div></div></div></div><div class="col-md-4"><div class="pt-5 d-xl-block d-none"><div class="triangle"></div><div class="circle"></div></div><div class="d-flex mt-5"><div class="text-primary"><u>Full Stack Web Developer</u></div><div class="title-line"></div></div><div><h3> Full-Stack Web Developer | Laravel &amp; Vue.js Specialist </h3><p class="text-light">I design and develop scalable, high-performance web applications using the latest technologies. Passionate about writing clean, efficient code and delivering seamless user experiences.</p><p class="mb-0"><a href="tel:923437239678">P: +92 (343) 723-9678</a></p><p><a href="mailto:msayubi76@gmail.com">E: msayubi76@gmail.com</a></p></div></div></div><div class="row py-4" id="about-section"><div class="col-lg-6 col-md-6 col-12 mb-3"><div class="d-flex"><div class="text-primary">About Me</div><div class="title-line"></div></div><h4> Empowering businesses with secure and scalable web applications. </h4><p class="text-light text-opacity-75"><small> Hi, a Full-Stack Web Developer with 6+ years of experience in building modern, scalable web applications. My expertise in Laravel, Vue.js/Nuxt.js, AWS, and RESTful APIs allows me to create secure, high-performance solutions for businesses. I focus on clean code, seamless user experiences, and efficient project execution. Let&#39;s bring your ideas to life! </small></p><div class="d-flex"><div class="fw-bold"><span class="text-primary experience">6</span></div><div class="text-light exp-text px-2"> Years of <div> Experience </div></div></div></div><div class="col-lg-6 col-md-6 col-12"><div class="bg-black px-3 py-2 rounded"><div><h3>Have a Project in Mind or <br> a Query?</h3><p class="text-light"> Let\u2019s Connect and Discuss Your Ideas! </p></div><div class="pt-5"><a href="mailto:msayubi76@gmail.com">E: msayubi76@gmail.com</a></div></div></div></div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = publicAssetsURL("/images/vuejs.png");
const _imports_1 = publicAssetsURL("/images/laravel.png");
const _imports_2$1 = publicAssetsURL("/images/aws.png");
const _sfc_main$7 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    useSwiper(containerRef, {
      effect: "creative",
      loop: true,
      autoplay: {
        delay: 1e3
      },
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1200
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400]
        },
        next: {
          shadow: true,
          translate: [0, 0, -400]
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-dark px-3 py-4" }, _attrs))}><h4 class="text-primary text-center"><u>Services</u></h4><h3 class="text-center">What I Do?</h3><div class=""><swiper-container><swiper-slide><div class="text-center service-slide"><img${ssrRenderAttr("src", _imports_0$1)} alt="Vue.js Logo" height="70"><h4 class="mt-3">Vue.js / Nuxt.js</h4><p class="text-light text-opacity-75 mb-2"> Advanced expertise in developing dynamic web applications with Vue.js and Nuxt.js. </p><p class="fw-semibold text-light text-opacity-75"> Vuex \xB7 Pinia \xB7 iView \xB7 Ant Design \xB7 BootstrapVue \xB7 Laravel Echo \xB7 SignalR </p></div></swiper-slide><swiper-slide><div class="text-center service-slide"><div class="position-relative mx-auto" style="${ssrRenderStyle({ "width": "fit-content" })}"><div class="bg-black p-3 laravel-box text-light"><img${ssrRenderAttr("src", _imports_1)} alt="Laravel Logo" height="70"><h4 class="mt-4">Laravel (PHP)</h4><p class="fw-semibold text-opacity-75"><small>Broadcasting \xB7 Pusher \xB7 Notification \xB7 Queue Jobs \xB7 Inertia.js \xB7 Artisan Commands \xB7 Task Scheduling \xB7 Seeders \xB7 Factories. etc</small></p></div><div class="laravel-triangle"></div></div></div></swiper-slide><swiper-slide><div class="text-center service-slide"><img${ssrRenderAttr("src", _imports_2$1)} alt="AWS Logo" height="70"><h4 class="mt-4">AWS</h4><p class="text-light text-opacity-75 mb-2"> Strong knowledge of AWS services with hands-on experience in deployment and scalability. </p><p class="fw-semibold text-opacity-75"> EC2 \xB7 S3 \xB7 Route 53 \xB7 AWS Amplify \xB7 CloudFront \xB7 RDS \xB7 IAM </p></div></swiper-slide></swiper-container></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = {
  __name: "ProgressCircle",
  __ssrInlineRender: true,
  props: {
    progress: {
      type: Number,
      required: true
    },
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      return {
        "--progress": `${props.progress}%`
        // This binds the custom property to the progress value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "100px", "text-align": "center" } }, _attrs))} data-v-37da635a><div class="progress-bar bg-dark"${ssrRenderAttr("data-progress", __props.progress)} style="${ssrRenderStyle(`background:
        radial-gradient(closest-side, #222222 79%, transparent 80% 100%),
        conic-gradient(${__props.color} ${__props.progress}%, white 0)`)}" data-v-37da635a><span class="text-opacity-75 text-light" data-v-37da635a>${ssrInterpolate(__props.progress)}%</span></div><div class="text-light" data-v-37da635a><b data-v-37da635a>${ssrInterpolate(__props.text)}</b></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressCircle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-37da635a"]]);
const _sfc_main$5 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = ref([
      {
        name: "VueJs/NuxtJs",
        progress: 85,
        color: "#49a900"
      },
      {
        name: "Laravel",
        progress: 85,
        color: "#49a900"
      },
      {
        name: "Aws",
        progress: 40,
        color: "#49a900"
      },
      {
        name: "MySql",
        progress: 70,
        color: "#49a900"
      },
      {
        name: "Git",
        progress: 70,
        color: "#f26b50"
      },
      {
        name: "JQuery",
        progress: 75,
        color: "#f26b50"
      },
      {
        name: "Linux-Shell",
        progress: 35,
        color: "#f26b50"
      },
      {
        name: "Restfull Api",
        progress: 90,
        color: "#f26b50"
      },
      {
        name: "Bootstrap",
        progress: 90,
        color: "#49a900"
      },
      {
        name: "Scss",
        progress: 80,
        color: "#f26b50"
      },
      {
        name: "Sass",
        progress: 80,
        color: "#f26b50"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProgressCircle = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}><h4 class="text-primary text-center"><u>My Expertise</u></h4><h3 class="text-center">I&#39;m Proficient In </h3><div class="row mt-5"><!--[-->`);
      ssrRenderList(unref(skills), (skill, index2) => {
        _push(`<div class="col-md-2 col-sm-3 col-4 mb-3">`);
        _push(ssrRenderComponent(_component_ProgressCircle, {
          progress: skill.progress,
          text: skill.name,
          color: skill.color
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-4 estimate-project" }, _attrs))}><div class="row"><div class="col-md-8 col-10 mx-auto"><div class="position-relative"><div style="${ssrRenderStyle({ "background-image": "url('./images/team-work.jpg')", "height": "184px", "opacity": "0.3", "background-size": "cover", "background-repeat": "no-repeat" })}"></div><div class="p-5 position-absolute top-0 w-100"><div class="d-flex justify-content-between"><div><a href="mailto:msayubi76@gmail.com">Get a Project Estimate</a><h3>Reach out with confidence!</h3><a href="mailto:msayubi76@gmail.com"> E:msayubi76@gmail.com </a></div><div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EstimateYourProject.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        name: "Crypto Exchange Platform",
        image: "./images/exchange-image-banner.png",
        link: "/projects/crypto-exchange-platform",
        description: "A full-featured crypto exchange platform developed  using Nuxt.js and Ant Design. Key features include P2P trading, spot/margin/futures trading, internal transfers, and decentralized deposits/withdrawals."
      },
      {
        name: "PlutoPakistan",
        image: "./images/plutopakistan-banner.png",
        link: "/projects/pluto-pakistan",
        description: "Multivendor ecommerce platform  developed using Laravel, jQuery, and Nuxt 3. Key features include multi-payment options, return/refund processing, and a robust commission system for vendors and admin."
      },
      {
        name: "E-Procurement",
        image: "./images/procurement-banner.png",
        link: "/projects/e-procurement",
        description: "Developed an E-Procurement Platform using Laravel and Vue.js. Key features include quotation management, vendor analysis, purchase order generation, and a built-in messaging system for seamless communication."
      },
      {
        name: "Jdm Trading",
        image: "./images/jdm-banner.png",
        link: "/projects/jdm-trading",
        description: "A car stock management platform built with Laravel, jQuery, and Bootstrap 5. Features include stock status labels, an admin panel for managing inventory, expenses, sales, and dynamic content."
      },
      {
        name: "School Management",
        image: "./images/school-management.png",
        link: "/projects/school-management",
        description: "Developed a School Management System with Laravel, jQuery & Bootstrap. Features: staff & student registration, academics, fee management, admissions, expenses, and certificate generation."
      }
    ];
    useRouter();
    const containerRef = ref(null);
    useSwiper(containerRef, {
      effect: "creative",
      loop: true,
      autoplay: {
        delay: 1e3
      },
      slidesPerView: 3,
      spaceBetween: 20,
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
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1200
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-4 bg-dark projects-section" }, _attrs))}><h4 class="text-primary text-center"><u>Projects</u></h4><h3 class="text-center">Projects I&#39;ve Worked On </h3><swiper-container><!--[-->`);
      ssrRenderList(projects, (project, index2) => {
        _push(`<swiper-slide><div class="py-3 px-2 pb-1 bg-black rounded-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: project.link,
          class: "text-decoration-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-light text-opacity-75"${_scopeId}>${ssrInterpolate(project.description)}</p><img${ssrRenderAttr("src", project.image)} class="img-fluid"${_scopeId}>`);
            } else {
              return [
                createVNode("p", { class: "text-light text-opacity-75" }, toDisplayString(project.description), 1),
                createVNode("img", {
                  src: project.image,
                  class: "img-fluid"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<h4 class="font-bold text-light text-center py-3">${ssrInterpolate(project.name)}</h4></div></swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = {
  __name: "WorkWith",
  __ssrInlineRender: true,
  setup(__props) {
    const companiess = ref([
      {
        name: "Digital Code",
        image: "./images/digital-code.svg"
      },
      {
        name: "Signup Solution",
        image: "./images/signup-solution.svg"
      },
      {
        name: "Procurosis",
        image: "./images/procurosis.png"
      },
      {
        name: "Global Gateway",
        image: "./images/ggateway.png"
      },
      {
        name: "Ikonami Technologies",
        image: "./images/ikonami.webp"
      },
      {
        name: "Zeeapp Solutions",
        image: "./images/zeeapp.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-4 mt-4",
        id: "work-with"
      }, _attrs))}><h4 class="text-primary text-center"><u>Worked With</u></h4><div class="row mt-5"><!--[-->`);
      ssrRenderList(unref(companiess), (company, index2) => {
        _push(`<div class="col-md-4 col-6 mb-3"><img${ssrRenderAttr("src", company.image)} height="40px" style="${ssrRenderStyle({ "filter": "grayscale(93%)" })}"></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkWith.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _imports_0 = publicAssetsURL("/images/phone.svg");
const _imports_2 = publicAssetsURL("/images/email.svg");
const _imports_4 = publicAssetsURL("/images/location.svg");
const _imports_5 = publicAssetsURL("/images/facebook.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-4 mt-4" }, _attrs))}><div class="row"><div class="col-12"><h4 class="text-primary"><u>Get in Touch</u></h4><h3>Talk or Meet With Me </h3><div class="row"><div class="col-md-6 col-7"><div class="row"><div class="col-md-1"><img${ssrRenderAttr("src", _imports_0)} height="24px"></div><div class="col-md-11"><p class="text-light text-opacity-75 mb-0">Call me Now</p><h6>+92 (343) 723-9678</h6></div></div></div><div class="col-md-6 col-5 px-0"><div class="d-flex"><div><img${ssrRenderAttr("src", _imports_1$1)} height="24px"></div><div><p class="text-light text-opacity-75 mb-0 px-2"><a href="https://www.linkedin.com/in/msayubi76" target="_blank"> View Profile </a></p></div></div></div></div><div class="row"><div class="col-md-6 col-7"><div class="row"><div class="col-md-1"><img${ssrRenderAttr("src", _imports_2)} height="24px"></div><div class="col-md-11"><p class="text-light text-opacity-75 mb-0">Chat with Me</p><h6>msayubi76@gmail.com</h6></div></div></div><div class="col-md-6 col-5 px-0"><div class="d-flex"><div><img${ssrRenderAttr("src", _imports_3)} height="24px"></div><div><p class="text-light text-opacity-75 mb-0 px-2"><a href="https://stackoverflow.com/users/10255904/msayubi76" target="_blank"> View Profile </a></p></div></div></div></div><div class="row"><div class="col-md-6 col-7"><div class="row"><div class="col-md-1"><img${ssrRenderAttr("src", _imports_4)} height="24px"></div><div class="col-md-11"><p class="text-light text-opacity-75 mb-0">Get Me Here</p><h6>Islamabad, Pakistan</h6></div></div></div><div class="col-md-6 col-5 px-0"><div class="d-flex"><div><img${ssrRenderAttr("src", _imports_5)} height="24px"></div><div><p class="px-2"><a href="https://www.facebook.com/msayubi76" target="_blank"> View Profile </a></p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_About = __nuxt_component_0$1;
  const _component_Services = _sfc_main$7;
  const _component_Skills = _sfc_main$5;
  const _component_EstimateYourProject = __nuxt_component_3;
  const _component_Projects = _sfc_main$3;
  const _component_WorkWith = _sfc_main$2;
  const _component_Contact = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(`</div><div id="services-section">`);
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(`</div><div id="skills-section">`);
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(ssrRenderComponent(_component_EstimateYourProject, null, null, _parent));
  _push(`</div><div id="projects-section">`);
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`</div><div id="contact-section">`);
  _push(ssrRenderComponent(_component_WorkWith, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-KVWJLvPv.mjs.map
