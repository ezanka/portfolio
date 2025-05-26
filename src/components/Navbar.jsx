

import { useState, useEffect } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const [isAccueilVisible, setIsAccueilVisible] = useState(false);
    const [isProjetsVisible, setIsProjetsVisible] = useState(false);
    const [isAlternanceVisible, setIsAlternanceVisible] = useState(false);
    const [isVeilleVisible, setIsVeilleVisible] = useState(false);
    const [isAnnexeVisible, setIsAnnexeVisible] = useState(false);

    useEffect(() => {
        const observeSection = (id, setter) => {
            const section = document.getElementById(id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => setter(entry.isIntersecting),
                { threshold: 0.3 }
            );
            observer.observe(section);
            return () => observer.unobserve(section);
        };

        const cleanups = [
            observeSection("accueil", setIsAccueilVisible),
            observeSection("projets", setIsProjetsVisible),
            observeSection("alternance", setIsAlternanceVisible),
            observeSection("veille", setIsVeilleVisible),
            observeSection("annexe", setIsAnnexeVisible),
        ];

        return () => {
            cleanups.forEach((cleanup) => cleanup && cleanup());
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex md:hidden lg:flex text-xl font-semibold font-poppins text-purple-400">
                        D'aietti
                        <span className="text-white"> Ethan</span>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => {const section = document.getElementById("accueil"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#accueil" className={`text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isAccueilVisible ? "text-purple-400" : "text-gray-300 hover:text-purple-300"}`}>ACCUEIL</button>
                        <button onClick={() => {const section = document.getElementById("projets"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#projets" className={`text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isProjetsVisible ? "text-purple-400" : "text-gray-300 hover:text-purple-300"}`}>MES PROJETS</button>
                        <button onClick={() => {const section = document.getElementById("alternance"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#alternance" className={`text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isAlternanceVisible ? "text-purple-400" : "text-gray-300 hover:text-purple-300"}`}>MON ALTERNANCE</button>
                        <button onClick={() => {const section = document.getElementById("veille"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#veille" className={`text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isVeilleVisible ? "text-purple-400" : "text-gray-300 hover:text-purple-300"}`}>VEILLE TECHNOLOGIQUE</button>
                        <button onClick={() => {const section = document.getElementById("annexe"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#annexe" className={`text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isAnnexeVisible ? "text-purple-400" : "text-gray-300 hover:text-purple-300"}`}>ANNEXE 8.1</button>
                    </div>

                    {/* Menu Burger Button */}
                    <div className="md:hidden">
                        <button
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="text-gray-300 hover:text-white focus:outline-none text-2xl"
                        >
                        <i className={showNavbar ? "bx bx-x text-2xl" : "bx bx-menu text-2xl"}></i>
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                {showNavbar && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <button onClick={() => {const section = document.getElementById("accueil"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#accueil" className={`block w-full text-left py-2 px-4 text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer font-medium ${isAccueilVisible ? "text-purple-400 bg-gray-800" : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"}`}>ACCUEIL</button>
                        <button onClick={() => {const section = document.getElementById("projets"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#projets" className={`block w-full text-left py-2 px-4 text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${isProjetsVisible ? "text-purple-400 bg-gray-800" : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"}`}>MES PROJETS</button>
                        <button onClick={() => {const section = document.getElementById("alternance"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#alternance" className={`block w-full text-left py-2 px-4 text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${isAlternanceVisible ? "text-purple-400 bg-gray-800" : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"}`}>MON ALTERNANCE</button>
                        <button onClick={() => {const section = document.getElementById("veille"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#veille" className={`block w-full text-left py-2 px-4 text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${isVeilleVisible ? "text-purple-400 bg-gray-800" : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"}`}>VEILLE TECHNOLOGIQUE</button>
                        <button onClick={() => {const section = document.getElementById("annexe"); section?.scrollIntoView({ behavior: "smooth" }); }} href="#annexe" className={`block w-full text-left py-2 px-4 text-sm uppercase tracking-wider transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${isAnnexeVisible ? "text-purple-400 bg-gray-800" : "text-gray-300 hover:bg-gray-800 hover:text-purple-300"}`}>ANNEXE 8.1</button>
                    </div>
                )}
            </div>
        </nav>
    );
}


