import CreedengoLogo from "@/assets/img/projects/creedengo.svg?component";
import EcoSonarLogo from "@/assets/img/projects/ecosonar.svg?component";
import GreenCodeRulesLogo from "@/assets/img/projects/green-code-rules.svg?component";
import GreenCodeQLLogo from "@/assets/img/projects/green-code-ql.svg?component";

export const projects = {
  creedengo: {
    title: "Creedengo",
    subTitle: "Anciennement ecoCode",
    description:
      "Collection de plugins SonarQube pour identifier les problèmes d'éco-conception dans votre code source",
    githubLink:
      "https://github.com/orgs/green-code-initiative/repositories?q=creedengo",
    logoComponent: CreedengoLogo,
    type: "Outils d'analyse",
    status: "published",
    hero: {
      variant: "neutral",
      secondButton: undefined,
    },
  },
  ecosonar: {
    title: "EcoSonar",
    subTitle: undefined,
    description:
      "Outil d'audit éco-conception combinant analyse statique et dynamique pour réduire l'impact environnemental des applications web",
    githubLink: "https://github.com/green-code-initiative/EcoSonar",
    logoComponent: EcoSonarLogo,
    type: "Outils d'analyse",
    status: "published",
    hero: {
      variant: "primary",
      secondButton: undefined,
    },
  },
  creedengoDashboard: {
    title: "Creedengo Dashboard",
    subTitle: "Anciennement Greensight, développé par Capgemini",
    description:
      "Tableau de bord de visualisation des métriques d'éco-conception pour prioriser les améliorations et prévenir les régressions",
    githubLink: "https://github.com/green-code-initiative/creedengo-dashboard",
    logoComponent: CreedengoLogo,
    type: "Tableau de bord",
    status: "draft",
    hero: {
      variant: undefined,
      secondButton: {
        text: "Voir le design system",
        link: "https://green-code-initiative.github.io/creedengo-dashboard/",
        type: "external_link",
        variant: "black",
      },
    },
  },
  greenCodeRules: {
    title: "Green Code Rules",
    subTitle: undefined,
    description:
      "Référentiel de bonnes pratiques d'éco-conception logicielle correspondant aux règles des plugins Creedengo",
    githubLink:
      "https://github.com/green-code-initiative/creedengo-rules-specifications",
    logoComponent: GreenCodeRulesLogo,
    type: "Documentation",
    status: "draft",
    hero: {
      variant: "secondary",
      secondButton: {
        text: "Explorer les règles",
        link: "/rules",
        variant: "black",
      },
    },
  },
  greenCodeQL: {
    title: "Green CodeQL",
    subTitle: undefined,
    description:
      "Collection de packs de requêtes CodeQL pour identifier les problèmes d'éco-conception directement dans vos dépôts GitHub",
    githubLink:
      "https://github.com/green-code-initiative/green-codeql-queries",
    logoComponent: GreenCodeQLLogo,
    type: "Outils d'analyse",
    status: "draft",
    hero: {
      variant: "primary",
      secondButton: undefined,
    },
  },
} as const;
