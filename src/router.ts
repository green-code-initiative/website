import type { NavigationHookAfter, RouterOptions } from "vue-router";
import HomeView from "./views/HomeView.vue";

export const routes: RouterOptions["routes"] = [
  {
    path: "/",
    name: "home",
    // must users will pass through the home page
    component: HomeView,
  },
  {
    path: "/contributeur",
    name: "contributeur",
    component: () => import("./views/ContributeurView.vue"),
  },
  {
    path: "/entreprise",
    name: "entreprise",
    component: () => import("./views/EntrepriseView.vue"),
  },
  {
    path: "/collectif",
    component: () => import("./views/TeamView.vue"),
    children: [
      { path: "", name: "collectif", redirect: "/collectif/membres" },
      {
        path: "membres",
        name: "collectif-membres",
        component: () => import("./views/team/TeamMembers.vue"),
      },
      {
        path: "organisations",
        name: "collectif-organisations",
        component: () => import("./views/team/TeamPartnerOrganizations.vue"),
      },
    ],
  },
  {
    path: "/challenge",
    name: "challenge",
    component: () => import("./views/ChallengeView.vue"),
  },
];

export const navigationHookAfter: NavigationHookAfter = (to) => {
  if (to.hash) {
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
