import { motion } from "framer-motion";

const skillData = [
  {
    title: "Languages",
    items: ["R", "C++", "SQL", "Java", "Swift", "Julia", "Python", "Javascript"],
  },
  {
    title: "Technologies",
    items: ["Git", "JUnit", "React", "pandas", "Catch2"],
  },
  {
    title: "Miscellaneous",
    items: ["Figma", "LaTeX", "ArcGIS", "PostgreSQL", "Jupyter notebook"],
  },
];

export default function Skills() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#050017] via-[#0f0036] to-[#180057] text-[#dcff10] px-4 py-20 font-mono"
    >
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: 2,
              height: 2,
              borderRadius: "50%",
              backgroundColor: "rgba(220, 255, 16, 0.8)",
              opacity: 0.6,
            }}
          />
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-5xl font-extrabold text-center mb-16 font-pixel"
      >
        SKILLS
      </motion.h1>

      <div
        className="relative z-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto font-pixel"
      >
        {skillData.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-[#dcff10]/20 rounded-2xl p-6 hover:rotate-1 hover:scale-105 transform transition"
          >
            <h2 className="text-xl font-bold text-[#ff6fff] mb-4 font-pixel">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm tracking-wide">
              {section.items.map((skill, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-[#dcff10]">▹</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}