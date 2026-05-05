import cv from "../assets/cv.pdf";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const navLinks = [
  { label: "Accueil", id: "accueil" },
  { label: "Projets", id: "projets" },
  { label: "Alternance", id: "alternance" },
  { label: "Veille", id: "veille" },
  { label: "Annexe 8.1", id: "annexe" },
];

const externalLinks = [
  {
    label: "GitHub",
    icon: "bxl-github",
    href: "https://github.com/ezanka",
  },
  {
    label: "LinkedIn",
    icon: "bxl-linkedin-square",
    href: "https://www.linkedin.com/in/ethan-d%E2%80%99aietti-097148252/?trk=people-guest_people_search-card",
  },
  {
    label: "CV",
    icon: "bx-file",
    href: cv,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center gap-10 flex-1"></div>
          <div className="flex flex-col items-center gap-6 order-1 md:order-2 flex-2">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="w-24 h-px bg-white/10" />

            <div className="flex items-center gap-5">
              {externalLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  <i className={`bx ${icon} text-lg`}></i>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 order-2 md:order-3 md:min-w-[180px] flex-1">
            <span className="text-xl font-bold font-poppins text-purple-400 tracking-wide">
              E.<span className="text-white">D</span>
            </span>
            <p className="text-gray-400 text-xs text-center md:text-right leading-relaxed">
              Étudiant BTS SIO SLAM
              <br />
              Développeur Full Stack
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-10">
          © {new Date().getFullYear()} Ethan D'aïetti — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
