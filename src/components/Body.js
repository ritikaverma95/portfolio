import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-indigo-900 min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* 🔮 Glowing Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-bounce"></div>

      {/* Content */}
      <h1 className="text-white text-5xl md:text-6xl font-extrabold italic drop-shadow-lg">
        Hello!
      </h1>
      <h2 className="text-white text-2xl md:text-3xl italic mt-2 mb-6">
        My name is <span className="text-yellow-300">Ritika</span>
      </h2>

      {/* Profile Image */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/227/854/non_2x/female-developer-vector.jpg"
        alt="Portfolio Logo"
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-yellow-300 shadow-xl transform hover:scale-105 transition duration-300"
      />

      {/* Small intro */}
      <p className="text-gray-200 mt-6 max-w-xl text-lg leading-relaxed">
        I am a passionate{" "}
        <span className="text-yellow-300 font-semibold">Developer</span> who
        loves building interactive and user-friendly websites. 🚀
      </p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-6">
        <Link
          to="About"
          className="px-6 py-3 bg-yellow-300 text-blue-900 font-bold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
        >
          ABOUT ME
        </Link>
        <Link
          to="contact"
          className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Contact ME
        </Link>
      </div>
    </div>
  );
};

export default Body;
