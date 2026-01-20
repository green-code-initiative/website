import type {
  NavigationGuard,
  NavigationHookAfter,
  RouterOptions,
} from "vue-router";
import HomeView from "./views/HomeView.vue";

export const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "home",
    // most users will pass through the home page
    component: HomeView,
  },
  {
    path: "/contributeur",
    name: "contributeur",
    component: () => import("./views/ContributeurView.vue"),
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
  // {
  //   path: "/challenge",
  //   name: "challenge",
  //   component: () => import("./views/ChallengeView.vue"),
  // },
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
