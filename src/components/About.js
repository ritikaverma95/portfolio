import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 overflow-hidden m-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-ping"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Heading */}
        <h1 className="text-yellow-300 text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Hi 👋, I’m <span className="text-yellow-300 font-semibold">Ritika</span>,  
          a passionate <span className="text-yellow-300 font-semibold">Web Developer </span>  
          with a growing interest in <span className="text-yellow-300 font-semibold">Backend Development</span>,  
          and a <span className="text-yellow-300 font-semibold">Database Enthusiast</span>.  
          I love creating beautiful, responsive, and user-friendly websites.  
          My goal is to combine clean code with modern design to deliver a smooth user experience. 🚀
        </p>

        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
          I enjoy working with technology. When I’m not coding, I love exploring new tech trends, solving problems,  
          and continuously learning to sharpen my skills.
        </p>

        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed mt-4 italic">
          ✨ “Code is like humor. When you have to explain it, it’s bad.” ✨
        </p>

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <h2 className="text-white text-3xl font-bold border-2 border-yellow-300 px-6 py-2 rounded-lg inline-block mb-10 mt-12 shadow-lg">
          Education
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl w-full gap-10 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
          
          {/* Timeline */}
          <div className="relative border-l-4 border-yellow-400 pl-6 space-y-12 flex-1 text-left">
            <div className="relative group">
              <div className="absolute -left-[38px] top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-purple-900"></div>
              <div className="p-4 rounded-lg transition-transform transform group-hover:translate-x-2">
                <h3 className="text-xl font-semibold text-yellow-300">2020 - 2021</h3>
                <p className="text-white text-lg">10th — The Golden Era Public School (CBSE)</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[38px] top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-purple-900"></div>
              <div className="p-4 rounded-lg transition-transform transform group-hover:translate-x-2">
                <h3 className="text-xl font-semibold text-yellow-300">2022 - 2023</h3>
                <p className="text-white text-lg">12th — The Golden Era Public School (CBSE)</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[38px] top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-purple-900"></div>
              <div className="p-4 rounded-lg transition-transform transform group-hover:translate-x-2">
                <h3 className="text-xl font-semibold text-yellow-300">2023 - 2026</h3>
                <p className="text-white text-lg">Bachelor of Computer Applications — Chandigarh University</p>
              </div>
            </div>
          </div>

          {/* Education Image */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?semt=ais_hybrid&w=740&q=80"
              alt="education"
              className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Career Goals */}
        <h2 className="text-white text-3xl font-bold border-2 border-yellow-300 px-6 py-2 rounded-lg inline-block mt-16 mb-8 shadow-lg">
          Career Goals
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-200 text-lg leading-relaxed font-semibold bg-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <p>
            My dream is to become a <span className="text-yellow-300 font-semibold">Full-Stack Developer</span>,  
            contributing to impactful projects across both frontend and backend domains.  
            I aim to specialize in <span className="text-yellow-300">modern web technologies</span> and  
            <span className="text-yellow-300"> backend systems</span>, while continuously improving my problem-solving skills.
          </p>

          <div className="w-full flex justify-center mt-6">
            <img
              src="https://www.michaelpage.co.in/sites/michaelpage.co.in/files/2022-05/Software%20Developer.jpg"
              className="w-full h-auto max-h-96 rounded-xl shadow-2xl border border-gray-200 transition-transform duration-300 hover:scale-105"
              alt="Career Goal"
            />
          </div>

          <p className="mt-4">
            In the long run, I aspire to work on projects that make a positive difference in people’s lives 🌍,  
            and eventually guide other aspiring developers on their journey.
          </p>
          <p className="text-gray-300 text-center mt-8 italic">
  Thank you for visiting my page. Let’s build something amazing together! 🚀
</p>
<hr className="border-t border-yellow-400 opacity-20 mt-10 w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
