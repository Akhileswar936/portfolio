import Navbar from "../pages/Navbar";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-[#05070f] text-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-emerald-400 shadow-xl">
              <img
                src="/profile.jpeg"
                alt="Akhileswara Reddy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center md:text-left space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Akhileswara{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                  Reddy
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-400 font-mono">
                Full Stack Web Developer (MERN)
              </p>

             <div className="flex gap-6 items-center text-2xl justify-center md:justify-start">
                <a
                  href="https://github.com/Akhileswar936"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/akhileswar999"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                 className="flex items-center gap-2 bg-white/5 border border-white/10 px-4  rounded-lg hover:border-emerald-400 transition"
                >
                  Resume
                </a>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mt-10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
              <FaPhone className="text-emerald-400" />
              <span className="text-slate-400">+91-9618086834</span>
            </div>

            <a
              href="mailto:akhileswarareddy999@gmail.com"
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-emerald-400 transition"
            >
              <FaEnvelope className="text-emerald-400" />
              <span className="text-slate-400">
                akhileswarareddy999@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
              <FaMapMarkerAlt className="text-emerald-400" />
              <span className="text-slate-400">
                Addanki, Andhra Pradesh
              </span>
            </div>
          </div>

          <div className="w-full max-w-4xl bg-white/5 border border-emerald-400/20 rounded-2xl p-8 mt-10 backdrop-blur-md">
            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
              Built and deployed{" "}
              <span className="text-white font-semibold">
                2 production-ready MERN applications
              </span>{" "}
              featuring JWT authentication, image uploads, notifications,
              and scalable REST APIs with clean{" "}
              <span className="text-emerald-400 font-semibold">
                TypeScript
              </span>{" "}
              architecture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
