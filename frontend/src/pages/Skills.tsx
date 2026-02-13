import Navbar from "../pages/Navbar";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaLaptopCode,
  FaLock,
} from "react-icons/fa";
import { FaBolt, FaEnvelopeOpenText,FaCloudArrowUp } from "react-icons/fa6";
import {  FiServer } from "react-icons/fi";


import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,

} from "react-icons/si";

export default function Skills() {
  const skillSections = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
         { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript (ES6+)", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <FaReact /> },
       
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "RESTful APIs", icon: <FiServer/> },
        { name: "Bcrypt & JWT Authentication", icon: <FaLock/> },
      ],
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Multer & Cloudinary", icon: <FaCloudArrowUp/> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaLaptopCode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Thunder Client", icon: <FaBolt />},
        {name: "Brevo (Email Notifications)", icon: <FaEnvelopeOpenText />}
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16 px-6 bg-[#05070f] text-slate-100">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <div className="space-y-14">
            {skillSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
                  {section.title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-emerald-400 hover:scale-105 transition-all duration-300 backdrop-blur-md"
                    >
                      <div className="text-3xl text-emerald-400">
                        {skill.icon}
                      </div>
                      <p className="text-sm text-slate-300 text-center">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
