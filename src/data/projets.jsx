import immoboard from "../assets/projets/immoboard.png";
import vizyy from "../assets/projets/vizyy.png";
import projectizy from "../assets/projets/projectizy.png";
import werewolf from "../assets/projets/werewolf.png";
import gamehub from "../assets/projets/gamehub.png";
import rainbowTable from "../assets/projets/rainbowTable.png";
import phising from "../assets/projets/phising.png";

const projets = {
  web: [
    {
      title: "Immoboard",
      description:
        "SaaS de gestion immobilière permettant aux propriétaires de gérer leurs biens, baux, paiements, dépenses et incidents depuis un tableau de bord centralisé.",
      banner: immoboard,
      context:
        "Projet personnel full-stack conçu et développé de A à Z, de la conception du schéma de base de données jusqu'au déploiement en production sur Vercel. Disponible à l'adresse immoboard.dev.",
      stack: [
        "Next.js",
        "TypeScript",
        "Prisma 7",
        "PostgreSQL",
        "Better Auth",
        "TailwindCSS",
        "shadcn/ui",
        "Vercel",
        "Supabase Storage",
      ],
      tags: [
        { tag: "Web" },
        { tag: "Next.js" },
        { tag: "SaaS" },
        { tag: "Full-stack" },
      ],
      redirect: "https://immoboard.dev",
    },
    {
      title: "Vizyy",
      description:
        "Application web de suivi de projet orientée client. Permet de visualiser l'avancement des tâches, les jalons et les livrables en temps réel, avec une interface claire et accessible à des utilisateurs non techniques.",
      banner: vizyy,
      context:
        "Projet réalisé dans le cadre de ma formation BTS SIO SLAM pour répondre à un besoin concret de communication entre une équipe de développement et ses clients.",
      stack: ["React", "Next.js", "PostgreSQL", "Vercel"],
      tags: [{ tag: "Web" }, { tag: "React" }, { tag: "Suivi projet" }],
      redirect: "https://vizyy.vercel.app/",
      link: "https://github.com/ezanka/vizyy",
    },
    {
      title: "Projectizy",
      description:
        "Outil de gestion de projet collaboratif permettant d'organiser les tâches, planifier les sprints et suivre l'avancement d'une équipe. Tableau de bord centralisé avec gestion des membres et des statuts.",
      banner: projectizy,
      context:
        "Projet réalisé en formation pour appliquer les concepts de gestion de projet agile dans un outil web full-stack.",
      stack: ["React", "Next.js", "PostgreSQL", "Vercel"],
      tags: [{ tag: "Web" }, { tag: "React" }, { tag: "Gestion projet" }],
      redirect: "https://projectizy.vercel.app/",
      link: "https://github.com/ezanka/projectizy",
    },
  ],
  java: [
    {
      title: "Loup Garou",
      description:
        "Jeu de Loup Garou jouable en local, avec gestion des rôles, des tours de jeu et de l'élimination des joueurs. Interface graphique développée avec Swing / Window Builder.",
      banner: werewolf,
      context:
        "Projet Java réalisé en formation pour mettre en pratique la programmation orientée objet, la gestion d'états et la conception d'interfaces graphiques.",
      stack: ["Java", "Swing", "Window Builder"],
      tags: [{ tag: "Java" }, { tag: "Window Builder" }],
      link: "https://github.com/ezanka/werewolf",
    },
    {
      title: "GameHub",
      description:
        "Logiciel Java regroupant plusieurs mini-jeux accessibles depuis une interface unifiée. Chaque jeu est indépendant et navigable depuis un menu principal. Projet démontrant la modularité et la réutilisabilité du code.",
      banner: gamehub,
      context:
        "Projet réalisé en formation pour consolider les bases de la POO en Java et la création d'interfaces graphiques avec Window Builder.",
      stack: ["Java", "Swing", "Window Builder", "MVC"],
      tags: [{ tag: "Java" }, { tag: "Window Builder" }, { tag: "Mini-jeux" }],
      link: "https://github.com/ezanka/gamehub",
    },
  ],
  cyber: [
    {
      title: "Rainbow Table",
      description:
        "Implémentation d'une rainbow table pour illustrer le craquage de mots de passe hashés. Le projet démontre les limites des algorithmes de hachage sans sel et l'importance du salage en cryptographie.",
      banner: rainbowTable,
      context:
        "Projet réalisé dans le cadre du module cybersécurité du BTS SIO, à des fins pédagogiques. Aucune utilisation malveillante — objectif : comprendre les vulnérabilités pour mieux les prévenir.",
      stack: ["PHP", "MySQL", "MD5 / SHA-1"],
      tags: [
        { tag: "Cybersécurité" },
        { tag: "Cryptographie" },
        { tag: "Hashing" },
      ],
    },
    {
      title: "Site de phishing",
      description:
        "Simulation d'un site de phishing reproduisant l'interface d'un service connu pour sensibiliser aux techniques d'hameçonnage. Le projet illustre comment les attaquants trompent les utilisateurs et comment s'en protéger.",
      banner: phising,
      context:
        "Projet réalisé dans le cadre du module cybersécurité du BTS SIO à des fins de sensibilisation uniquement. Déployé en environnement isolé, sans données réelles collectées.",
      stack: ["PHP", "MySQL", "HTML", "CSS"],
      tags: [
        { tag: "Cybersécurité" },
        { tag: "Phishing" },
        { tag: "Sensibilisation" },
      ],
    },
  ],
};

export default projets;
