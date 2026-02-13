import Navbar from "../pages/Navbar";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      institution: "Rise Krishna Sai Prakasam Group of Institutions",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "2022 - 2026",
      score: "7.9/10 CGPA",
    },
    {
      institution: "Viswabharathi Junior College",
      degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
      duration: "2020 - 2022",
      score: "9.2/10",
    },
    {
      institution: "ZPHS Thimmayapalem",
      degree: "Secondary School Certificate (SSC)",
      duration: "2019 - 2020",
      score: "9.5/10",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-[#05070f] text-slate-100">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Education
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#05070f] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-xl">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-emerald-400">
                      {edu.degree}
                    </h2>
                    <p className="text-slate-300 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400">
                  {edu.duration}
                </p>

                <p className="mt-2 text-slate-300 font-medium">
                  {edu.score}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
