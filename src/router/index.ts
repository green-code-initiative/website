import ChallengeView from "@/views/ChallengeView.vue";
import ContributeurView from "@/views/ContributeurView.vue";
import EntrepriseView from "@/views/EntrepriseView.vue";
import HomeView from "@/views/HomeView.vue";
import TeamView from "@/views/TeamView.vue";
import TeamMembers from "@/views/team/TeamMembers.vue";
import TeamPartnerOrganizations from "@/views/team/TeamPartnerOrganizations.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contributeur",
      name: "contributeur",
      component: ContributeurView,
    },
    {
      path: "/entreprise",
      name: "entreprise",
      component: EntrepriseView,
    },
    {
      path: "/collectif",
      component: TeamView,
      children: [
        { path: "", name: "collectif", redirect: "/collectif/membres" },
        { path: "membres", name: "collectif-membres", component: TeamMembers },
        {
          path: "organisations",
          name: "collectif-organisations",
          component: TeamPartnerOrganizations,
        },
      ],
    },
    {
      path: "/challenge",
      name: "challenge",
      component: ChallengeView,
    },
  ],
});

router.afterEach((to) => {
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
});
export default router;
