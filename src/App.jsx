import { useState } from "react"

{/* Import Components */}
import Navbar from "./components/Navbar"

{/* Import Data */}
import projets from "./data/projets"
import alternance from "./data/alternance"
import veille from "../veille_frameworks.json"

{/* Import Img */}
import pp from "./assets/pp.png"
import logoSNCF from './assets/alternance/logoSNCF.png'
import framework from './assets/veille/framework.png'
import angular from './assets/veille/angular.png'
import react from './assets/veille/react.png'
import vue from './assets/veille/vue.png'
import web from './assets/veille/web.png'
import defaultImg from './assets/veille/web.png'

import annexe from './assets/annexe8_1.pdf'
import annexeImg from './assets/annexe8_1.png'

function App() {

    const filters = ["tous", "web", "java", "reseau"];

    const [activeFilter, setActiveFilter] = useState("tous");
    const [viewAnnexe, setViewAnnexe] = useState(false);
    const [dlAnnexe, setdlAnnexe] = useState(false);

    const filteredProjects = projets[activeFilter] || [];
    const allProjects = projets;

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white font-inter">
                <Navbar /> 
                <section id="accueil" className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 to-purple-900 flex align-middle">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 ">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 leading-tight">
                                <span className="block">Ethan D'aïetti</span> 
                                <span className="text-purple-400">Développeur Web</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Étudiant en BTS SIO SLAM, passionné par le développement et les technologies web modernes.
                            </p>
                            <button onClick={() => {const section = document.getElementById("projets"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#projets" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
                                Découvrir mes projets
                                <i className='bx bx-right-arrow-alt' ></i>
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                                    <img src={pp} alt="Portait Ethan" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                    <span className="text-sm">Promo 2024-2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <button onClick={() => {const section = document.getElementById("projets"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#projets" className="text-gray-400 hover:text-white cursor-pointer">
                            <i className='bx bx-chevron-down text-4xl' ></i>
                        </button>
                    </div>
                </section> 
                <section id="projets" className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Mes Projets</h2>
                            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Découvrez les projets sur lesquels j'ai travaillé pendant ma formation et mes réalisations personnelles.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                                    activeFilter === filter ? "bg-purple-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
                                    } !rounded-button whitespace-nowrap cursor-pointer`}
                                >
                                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(activeFilter === "tous"
                            ? Object.values(allProjects).flat()
                            : filteredProjects
                            ).map(({ title, description, banner, tags, link }, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                                    <div className="h-48 overflow-hidden">
                                        <img src={banner} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-6 flex flex-col justify-between flex-grow">
                                        <h3 className="text-xl font-bold font-poppins mb-2">{title}</h3>
                                        <p className="text-gray-400 mb-4">{description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {tags.map(({ tag }, index) => (
                                                <span key={index} className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="mt-auto flex space-x-3">
                                            <a href="https://www.sioslam.fr/daietti_Ethan/" target="_blank" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                                                <i className='bx bx-link-external mr-2'></i>
                                                Ouvrir
                                            </a>
                                            <a href={link} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                                                <i className='bx bxl-github mr-2'></i>
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </section>
                <section id="alternance" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Mon Alternance</h2>
                            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Mon expérience professionnelle en alternance au sein de la SNCF.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                                        <img src={logoSNCF} alt="Logo SNCF" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-poppins">SNCF Voyageurs</h3>
                                        <p className="text-purple-400">Entreprise d'accueil</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6">Entre record de fréquentation et pression concurrentielle, SNCF Voyageurs cherche l’équilibre : offrir une mobilité bas-carbone abordable tout en restant compétitive et innovante. Défi central pour la décennie ferroviaire qui s’ouvre.</p>
                                <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                        <i className='bx bxs-map text-purple-400 mr-3' ></i>
                                        Levallois, France
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <i className='bx bxs-group text-purple-400 mr-3' ></i>
                                        + 275.000 employés
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <i className='bx bx-globe text-purple-400 mr-3' ></i>
                                        <a href="https://www.sncf-voyageurs.com/fr/" className="text-purple-400 hover:underline">www.sncf-voyageurs.com/fr/</a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
                                <h3 className="text-xl font-bold font-poppins flex items-center mb-6">
                                    <i className='bx bx-list-ul text-2xl text-purple-400 mr-3'></i>
                                    Missions et Compétences
                                </h3>
                                <div className="space-y-6 relative before:absolute before:left-1.5 before:top-0 before:h-full before:w-0.5 before:bg-purple-700">
                                    {alternance.missions.map(({ title, description, tags }, index) => (
                                        <div key={index} className="pl-8 relative">
                                            <div className="absolute left-0.25 top-1.5 w-3 h-3 rounded-full bg-purple-600"></div>
                                            <h4 className="text-lg font-medium text-white mb-2">{title}</h4>
                                            <p className="text-gray-400 mb-3">{description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {tags.map(({tag }, index) => (
                                                    <span key={index} className="bg-gray-700 text-purple-300 text-xs px-3 py-1 rounded-full">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="veille" className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Veille Technologique</h2>
                            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Les sujets technologiques que je suis.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {veille.map(({ title, link, published, summary, tags }, index) => {
                                const getImageByTag = () => {
                                    const tagMap = {
                                        react: react,
                                        vue: vue,
                                        angular: angular,
                                        web: web,
                                        framework: framework
                                    };

                                    for (const tag of tags) {
                                        if (tagMap[tag.toLowerCase()]) return tagMap[tag.toLowerCase()];
                                    }

                                    return defaultImg;
                                };

                                return (
                                    <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                                        <div className="h-48 overflow-hidden">

                                        <img
                                            src={getImageByTag()}
                                            alt={title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />

                                            
                                        </div>
                                        <div className="p-6 flex flex-col justify-between flex-grow">
                                            <div>
                                                <div className="flex justify-between items-center mb-3">
                                                    <span className="text-xs text-purple-400">{published}</span>
                                                    <div className="w-full flex items-center justify-end gap-2 overflow-x-hidden">
                                                        {tags.map((tag, index) => (
                                                            <span key={index} className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold font-poppins mb-3">{title}</h3>
                                                <p className="text-gray-400 mb-4 line-clamp-3">{summary}</p>
                                            </div>
                                            <a
                                                href={link}
                                                target="_blank"
                                                className="mt-auto text-purple-400 hover:text-purple-300 inline-flex items-center transition-colors duration-300 cursor-pointer"
                                            >
                                                Lire plus <i className='bx bxs-right-arrow-alt ml-2 text-sm'></i>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section id="annexe" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Annexe 8.1</h2>
                            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Documentation tecnique et annexes liées à mon parcoues de fomrtaion BTS SIO option SLAM.</p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg">
                            {viewAnnexe && 
                                <div>
                                    <div className="w-full relative">
                                        <button
                                        onClick={() => setViewAnnexe(!viewAnnexe)}
                                        className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                                        >
                                            <i className="bx bx-x text-2xl"></i>
                                        </button>
                                    </div>
                                    <img src={annexeImg} className="w-full"/>
                                </div>
                            }
                            <div className={`flex flex-col md:flex-row items-center ${viewAnnexe ? "hidden" : "block"}`}>
                                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                    <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <i className='bx bxs-file-pdf text-8xl text-purple-400 opacity-30'></i>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-4">
                                            <div>
                                                <h4 className="text-lg font-medium text-white mb-1">Annexe 8.1 - Documentation</h4>
                                                <p className="text-sm text-gray-400">Dernière mise à jour: 17 Mai 2025</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-bold font-poppins mb-4">Documentation Technique</h3>
                                    <p className="text-gray-300 mb-6">
                                        Ce document contient les informations techniques détaillées concernant les projets réalisés durant ma formation, ainsi que les compétences acquises en BTS SIO option SLAM.
                                    </p>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">Annexe_8.1.pdf</span>
                                            <span className="text-xs text-gray-400">89 Ko</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                                            <div className={`${dlAnnexe ? "animate-progress" : ""} h-full rounded-full bg-purple-700`}></div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <a onClick={() => setdlAnnexe(true)} download={annexe} href="" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center flex-1 !rounded-button whitespace-nowrap cursor-pointer">
                                            <i className='bx bx-download mr-2'></i>
                                            Télécharger
                                        </a>
                                        <button onClick={() => setViewAnnexe(!viewAnnexe)} className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center flex-1 !rounded-button whitespace-nowrap cursor-pointer">
                                            <i className='bx bxs-show mr-2'></i>
                                            Aperçu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
