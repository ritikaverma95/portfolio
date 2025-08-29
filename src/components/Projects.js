import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Food Delivery App",
      description: "Responsive React app with menu filtering, cart, and checkout.",
      details:
        "This project allows users to browse a dynamic food menu, filter items by category, add them to a cart, and proceed to checkout. I'm currently working on integrating a payment gateway and user authentication.",
      status: "🚧 Currently Working On",
      image:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      tech: ["React", "Tailwind", "API"],
      github: "https://github.com/ritikaverma27/food-app",
      demo: "https://foodapp-demo.netlify.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React + Tailwind showcasing my work.",
      details:
        "My personal portfolio website where I showcase my projects and skills. Fully responsive, built with React + Tailwind, deployed on Netlify. Includes smooth animations and routing.",
      status: "✅ Completed",
      image:
        "https://static.vecteezy.com/system/resources/previews/011/067/273/non_2x/portfolio-button-portfolio-speech-bubble-portfolio-colorful-web-banner-illustration-vector.jpg",
      tech: ["React", "Tailwind", "Parcel"],
      github: "https://github.com/ritikaverma27/portfolio",
      demo: "https://ritika-portfolio.netlify.app",
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather forecast app using OpenWeather API and modern UI.",
      details:
        "A weather app showing real-time conditions and a 5-day forecast. Uses OpenWeather API, responsive UI, and clean design. I'm adding dark mode and location-based search features.",
      status: "✅ Completed",
      image:
        "https://www.figma.com/community/resource/e4e8d4bb-1143-4ead-a4ce-c99b0cdde93b/thumbnail",
      tech: ["React", "API", "CSS"],
      github: "https://github.com/ritikaverma27/weather-app",
      demo: "https://ritika-weather.netlify.app",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10 m-8">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition relative group"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-2xl font-bold text-yellow-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-3xl font-bold text-yellow-400 mt-4">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {selectedProject.status}
            </p>
            <p className="text-gray-300 mt-4">{selectedProject.details}</p>

            {/* Links again */}
            <div className="flex gap-4 mt-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            </div>
            
          </div>
        </div>
      )}
       {/* 🚀 Placeholder Card */}
  <div className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-2xl shadow-lg p-6 m-4">
    <span className="text-2xl font-bold text-yellow-400">🚀 Coming Soon</span>
    <p className="text-gray-300 mt-2 text-center">
      New projects are on the way, stay tuned!
    </p>
  </div>
</div>
  
  );
};

export default Projects;
