import { ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "UnityDocs",
      description:
        "Secure document management platform with real-time collaboration and text encryption.",
      github: "https://github.com/r0ckYr/UnityDocs/",
      live: "https://unitydocs.rockyrp.com",
      category: "Enterprise Solutions",
    },
    {
      title: "PixelVision",
      description:
        "Medical image classification system with 95% accuracy in disease detection.",
      github: "https://github.com/r0ckYr/PixelVision",
      live: "https://pixelvision.rockyrp.com",
      category: "Medical Technology",
    },
    {
      title: "Online Code Editor",
      description:
        "Collaborative code editing platform with real-time syntax highlighting.",
      github: "https://github.com/r0ckYr/online-code-editor",
      live: "https://codeeditor.rockyrp.com",
      category: "Developer Tools",
    },
    {
      title: "BERT-Powered QnA",
      description:
        "Chrome extension using BERT model for intelligent query handling.",
      github: "https://github.com/r0ckYr/ChromeQnAExtension",
      category: "AI",
    },
    {
      title: "HealthCare Chatbot",
      description:
        "AI-powered healthcare assistant with advanced NLP capabilities.",
      github: "https://github.com/r0ckYr/HealthcareChatBot",
      live: "https://healthbot.rockyrp.com",
      category: "Healthcare",
    },
    {
      title: "Ludo Game",
      description: "Modern multiplayer board game with real-time gameplay.",
      github: "https://github.com/r0ckYr/Ludo",
      live: "https://ludofam.nixarcade.fun",
      category: "Entertainment",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white p-6 hover:bg-white hover:text-black transition-colors"
            >
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-70"
                >
                  <Code size={16} className="mr-1" /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-70"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
