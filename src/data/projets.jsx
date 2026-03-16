
import projetSite from "../assets/projets/projetSite.png"
import inDev from "../assets/projets/endev.png"
import vizyy from "../assets/projets/vizyy.png"
import projectizy from "../assets/projets/projectizy.png"
import werewolf from "../assets/projets/werewolf.png"
import gamehub from "../assets/projets/gamehub.png"
import rainbowTable from "../assets/projets/rainbowTable.png"
import phising from "../assets/projets/phising.png"

const projets = {
    web : [
        {
            title : "Site regroupant les projets",
            description : "Une application web regroupant mes projets web réalisé pendant mon cursus",
            banner : projetSite,
            tags : [
                {tag : "Web"},
                {tag : "HTML"},
                {tag : "CSS"}
            ],
            link: "https://github.com/ezanka/portfolio"
        },
        {
            title : "Vizyy",
            description : "Site de suivi de projet pour le client, permettant de visualiser l'avancement des tâches en temps réel.",
            banner : vizyy,
            tags : [
                {tag : "Web"},
                {tag : "React"},
                {tag : "Suivi projet"}
            ],
            redirect: "https://vizyy.vercel.app/",
            link: "https://github.com/ezanka/vizyy"
        },
        {
            title : "Projectizy",
            description : "Site de gestion de projet permettant d'organiser, planifier et suivre les projets d'une équipe.",
            banner : projectizy,
            tags : [
                {tag : "Web"},
                {tag : "React"},
                {tag : "Gestion projet"}
            ],
            redirect: "https://projectizy.vercel.app/",
            link: "https://github.com/ezanka/projectizy"
        },
    ],
    java : [
        {
            title : "Loup garou",
            description : "Un loup garou en locale",
            banner : werewolf,
            tags : [
                {tag : "Java"},
                {tag : "Window Builder"}
            ],
            link: "https://github.com/ezanka/werewolf"
        },
        {
            title : "GameHub",
            description : "Logiciel regroupant plusieurs mini-jeux, offrant une interface unifiée pour accéder à différents jeux.",
            banner : gamehub,
            tags : [
                {tag : "Java"},
                {tag : "Window Builder"},
                {tag : "Mini-jeux"}
            ],
            link: "https://github.com/ezanka/gamehub"
        }
    ],
    cyber : [
        {
            title : "Rainbow Table",
            description : "Implémentation d'une rainbow table pour le craquage de mots de passe hashés, dans un cadre éducatif.",
            banner : rainbowTable,
            tags : [
                {tag : "Cybersécurité"},
                {tag : "Cryptographie"},
                {tag : "Hashing"}
            ],
        },
        {
            title : "Site de phishing",
            description : "Simulation de site de phishing à des fins éducatives et de sensibilisation à la sécurité informatique.",
            banner : phising,
            tags : [
                {tag : "Cybersécurité"},
                {tag : "Phishing"},
                {tag : "Sensibilisation"}
            ],
        }
    ]
}

export default projets