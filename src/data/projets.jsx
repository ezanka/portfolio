
import projetSite from "../assets/projets/projetSite.png"
import inDev from "../assets/projets/endev.png"

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
            link: "https://github.com/ezanka/werewolf"
        },
        
    ],
    java : [
        {
            title : "Loup garou",
            description : "Un loup garou en locale",
            banner : inDev,
            tags : [
                {tag : "Java"},
                {tag : "Window Builder"}
            ],
            link: "https://github.com/ezanka/werewolf"
        }
    ]
}

export default projets