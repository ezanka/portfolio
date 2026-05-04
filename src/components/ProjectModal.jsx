import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const {
    title,
    description,
    banner,
    images,
    tags,
    redirect,
    link,
    context,
    stack,
  } = project;

  const allImages = images?.length ? images : banner ? [banner] : [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {allImages.length > 0 && (
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img
              src={allImages[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 border border-white/10 cursor-pointer"
        >
          <i className="bx bx-x text-xl" />
        </button>

        <div className="p-6 pt-4">
          <h2 className="text-2xl font-bold font-poppins text-white mb-3">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map(({ tag }, i) => (
              <span
                key={i}
                className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed mb-5">{description}</p>

          {context && (
            <div className="bg-gray-800 rounded-xl p-4 mb-5 border-l-4 border-purple-600">
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-1 font-semibold">
                Contexte
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">{context}</p>
            </div>
          )}

          {stack?.length > 0 && (
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                Stack utilisée
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {allImages.length > 1 && (
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                Captures
              </p>
              <div className="grid grid-cols-2 gap-2">
                {allImages.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${title} ${i + 2}`}
                    className="w-full h-32 object-cover rounded-lg border border-white/10"
                  />
                ))}
              </div>
            </div>
          )}

          {(redirect || link) && (
            <div className="flex gap-3 pt-2">
              {redirect && (
                <a
                  href={redirect}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm cursor-pointer"
                >
                  <i className="bx bx-link-external" />
                  Voir le projet
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm cursor-pointer"
                >
                  <i className="bx bxl-github" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
