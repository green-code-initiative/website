import { projects } from "@/assets/data/projects";
import HomeView from "@/views/HomeView.vue";
import type {
  NavigationGuard,
  NavigationHookAfter,
  RouterOptions,
} from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    project?: (typeof projects)[keyof typeof projects];
  }
}

export const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "home",
    // most users will pass through the home page
    component: HomeView,
  },
  {
    path: "/projets",
    component: () => import("./views/projects/ProjectLayout.vue"),
    children: [
      {
        path: "",
        name: "projets",
        component: () => import("./views/projects/ProjectsList.vue"),
      },
      {
        path: "creedengo",
        name: "projet-creedengo",
        component: () => import("./views/projects/CreedengoProject.vue"),
        meta: { project: projects.creedengo },
      },
      {
        path: "ecosonar",
        name: "projet-ecosonar",
        component: () => import("./views/projects/EcosonarProject.vue"),
        meta: { project: projects.ecosonar },
      },
      {
        path: "creedengo-dashboard",
        name: "projet-creedengo-dashboard",
        component: () =>
          import("./views/projects/CreedengoDashboardProject.vue"),
        meta: { project: projects.creedengoDashboard },
      },
      {
        path: "green-code-rules",
        name: "projet-green-code-rules",
        component: () => import("./views/projects/GreenCodeRulesProject.vue"),
        meta: { project: projects.greenCodeRules },
      },
      {
        path: "green-codeql",
        name: "projet-green-codeql",
        component: () => import("./views/projects/GreenCodeQLProject.vue"),
        meta: { project: projects.greenCodeQL },
      },
    ],
  },
  {
    path: "/collectif",
    component: () => import("./views/TeamView.vue"),
    children: [
      { path: "", name: "collectif", redirect: "/collectif/membres" },
      {
        path: "membres",
        name: "collectif-membres",
        component: () => import("./views/TeamMembers.vue"),
      },
    ],
  },
  {
    path: "/challenge",
    name: "challenge",
    component: () => import("./views/ChallengeView.vue"),
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("./views/RulesView.vue"),
  },
  {
    path: "/partenaires",
    name: "partenaires",
    component: () => import("./views/PartnersView.vue"),
  },
  {
    path: "/mentions-legales",
    name: "mentions-legales",
    component: () => import("./views/LegalNoticeView.vue"),
  },
  // redirect all other paths to homepage
  { path: "/:pathMatch(.*)*", name: "not-found", redirect: "/" },
];

export const navigationGuard: NavigationGuard = (to) => {
  // redirect old URLs using hash navigation to new ones
  if (to.hash?.startsWith("#/")) {
    return to.hash.slice(2);
  }
};

export const navigationHookAfter: NavigationHookAfter = (to) => {
  if (to.hash && !to.hash.includes(":")) {
    setTimeout(() => {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
