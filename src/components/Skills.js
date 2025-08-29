import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaPhp,
  FaReact,
  FaDatabase,
  FaFileExcel,
  FaFilePowerpoint
} from "react-icons/fa";
import { SiCplusplus, SiFlask } from "react-icons/si";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const technicalSkills = {
    PYTHON: {
      icon: <FaPython className="text-yellow-300 text-3xl inline-block mr-2" />,
      desc: "Python is a versatile, beginner-friendly language used in web development, automation, data science, and AI."
    },
    "C++": {
      icon: <SiCplusplus className="text-blue-400 text-3xl inline-block mr-2" />,
      desc: "C++ is a powerful language ideal for system-level programming, game engines, and high-performance applications."
    },
    PHP: {
      icon: <FaPhp className="text-indigo-400 text-3xl inline-block mr-2" />,
      desc: "PHP is a server-side scripting language often used for web development and powering content management systems like WordPress."
    },
    FLASK: {
      icon: <SiFlask className="text-green-300 text-3xl inline-block mr-2" />,
      desc: "Flask is a lightweight Python framework for building fast, scalable web applications and APIs."
    },
    REACTJS: {
      icon: <FaReact className="text-cyan-300 text-3xl inline-block mr-2" />,
      desc: "ReactJS is a JavaScript library used to build fast, interactive, and dynamic user interfaces with a component-based approach."
    },
    SQL: {
      icon: <FaDatabase className="text-red-400 text-3xl inline-block mr-2" />,
      desc: "SQL (Structured Query Language) is essential for managing, querying, and manipulating data in relational databases."
    }
  };

  const productivityTools = {
    EXCEL: {
      icon: <FaFileExcel className="text-green-500 text-3xl inline-block mr-2" />,
      desc: "Excel is used for organizing, analyzing, and visualizing data using formulas, charts, and pivot tables."
    },
    POWERPOINT: {
      icon: <FaFilePowerpoint className="text-orange-500 text-3xl inline-block mr-2" />,
      desc: "PowerPoint is used to design impactful presentations with animations, transitions, and visual storytelling."
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <div className="text-center mt-10">
      {/* Technical Skills */}
      <motion.h2
        className="text-white text-3xl font-bold border-2 border-yellow-300 px-8 py-3 rounded-xl inline-block mb-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        💻 Technical Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-5 mb-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {Object.keys(technicalSkills).map((skill) => (
          <motion.button
            key={skill}
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-7 py-3 rounded-full font-bold shadow-md hover:shadow-2xl transition duration-300"
            onClick={() => handleSkillClick(skill)}
          >
            {technicalSkills[skill].icon} {skill}
          </motion.button>
        ))}
      </motion.div>

      {/* Productivity Tools */}
      <motion.h2
        className="text-white text-3xl font-bold border-2 border-green-300 px-8 py-3 rounded-xl inline-block mb-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        📂 Productivity Tools
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {Object.keys(productivityTools).map((tool) => (
          <motion.button
            key={tool}
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-green-400 to-green-500 text-purple-900 px-7 py-3 rounded-full font-bold shadow-md hover:shadow-2xl transition duration-300"
            onClick={() => handleSkillClick(tool)}
          >
            {productivityTools[tool].icon} {tool}
          </motion.button>
        ))}
      </motion.div>

      {/* Skill Details */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            key={selectedSkill}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mt-8 bg-gradient-to-r from-purple-800 to-purple-600 text-white p-6 rounded-xl shadow-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center justify-center">
              {technicalSkills[selectedSkill]?.icon || productivityTools[selectedSkill]?.icon} {selectedSkill}
            </h3>
            <p className="text-lg leading-relaxed">
              {technicalSkills[selectedSkill]?.desc || productivityTools[selectedSkill]?.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
