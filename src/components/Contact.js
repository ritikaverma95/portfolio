import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null); // ✅ store success/error message
  const [statusType, setStatusType] = useState(""); // ✅ "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbz6e58",
        "template_dxahu7e",
        form.current,
        "U8f4qRN3bcgNK9Bin"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setStatusType("success");
          form.current.reset();
          setTimeout(() => setStatusMessage(null), 4000); // Hide after 4 sec
        },
        (error) => {
          setStatusMessage("❌ Failed to send message, please try again.");
          setStatusType("error");
          console.error(error.text);
          setTimeout(() => setStatusMessage(null), 4000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black flex items-center justify-center py-16 px-6 text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Quote + Image */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-md bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            "Great things are built through collaboration — let’s create something amazing together."
          </p>

          <img
            src="https://i0.wp.com/www.saastr.com/wp-content/uploads/2025/01/IMG_7033.png?fit=450%2C391&quality=70&ssl=1"
            alt="Contact Illustration"
            className="w-72 md:w-96 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Side - Contact Info + Form */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h1>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            I’d love to hear from you! Whether you have a project in mind, want
            to collaborate, or just say hello — feel free to drop me a message.
          </p>

          {/* Contact Info */}
          <div className="mb-8">
            <p className="text-lg mb-2">
              📧{" "}
              <a
                href="mailto:ritikaverma9541@gmail.com"
                className="text-yellow-400 font-semibold hover:underline"
              >
                ritikaverma9541@gmail.com
              </a>
            </p>
            <p className="text-gray-300">📍 Sonipat, Haryana</p>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl space-y-5 border border-gray-700"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              🚀 Send Message
            </button>

            {/* ✅ Success / Error Message */}
            {statusMessage && (
              <p
                className={`mt-4 text-center font-semibold ${
                  statusType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>

          {/* Social Links */}
          <div className="mt-6 text-gray-400">
            <p>
              You can also connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/ritikaverma27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-semibold hover:underline"
              >
                LinkedIn
              </a>{" "}
              or check out my projects on{" "}
              <a
                href="https://github.com/Ritika001215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-semibold hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
