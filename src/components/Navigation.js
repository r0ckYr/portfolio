import { Github, Linkedin, Twitter, Mail, Menu, X, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = ({ isOpen, toggleMenu }) => (
  <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link
          to="/"
          className="flex items-center space-x-2 text-white hover:bg-transparent"
        >
          <Radio size={24} className="text-white" />
          <span className="text-xl font-bold tracking-wider">r0ckYr</span>
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-white hover:bg-transparent hover:text-gray-300 transition-colors duration-300"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-gray-300 transition-colors duration-300 hover:bg-transparent"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className="text-white hover:text-gray-300 transition-colors duration-300 hover:bg-transparent"
        >
          PROJECTS
        </Link>
        <a
          href="/RakshitResume.pdf"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors duration-300 hover:bg-transparent"
        >
          RESUME
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/r0ckYr"
          className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rakshitrautela7"
          className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://twitter.com/r0ckYr"
          className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:rakshitrautela17@gmail.com"
          className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>

      <button onClick={toggleMenu} className="md:hidden text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </nav>
);

export default Navigation;
