import Navbar from "../pages/Navbar";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Informate — MERN Stack TypeScript Web Application",
      duration: "Sep - Dec 2025",
      description: [
        "Developed a secure social platform enabling users to share thoughts and experiences.",
        "Implemented secure authentication using bcrypt and JWT with password reset via Brevo.",
        "Built feed system with create, delete, bookmark, timestamps and domain-based selection.",
        "Implemented profile image upload using Multer and interactive notifications.",
      ],
      live: "https://www.informate.co.in/",
      github: "https://github.com/Akhileswar936",
    },
    {
      title: "InfoEasy — Secure Information Sharing Platform",
      duration: "May - Jun 2025",
      description: [
        "Built secure MERN stack application for temporary information sharing.",
        "Implemented auto-generated 6-character token-based secure access.",
        "Integrated JWT authentication and encryption for secure retrieval.",
        "Deployed backend on Render and frontend on Vercel.",
      ],
      live: "https://infoeasy-info.vercel.app/",
      github: "https://github.com/Akhileswar936",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-[#05070f] text-slate-100">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-emerald-400">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-400 mt-2">
                    {project.duration}
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-300 text-sm leading-relaxed">
                    {project.description.map((point, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-emerald-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-400 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg text-sm hover:border-emerald-400 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
