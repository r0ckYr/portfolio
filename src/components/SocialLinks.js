import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialLinks = () => (
  <div className="flex space-x-6 items-center justify-center">
    <a
      href="https://github.com/r0ckYr"
      className="text-white hover:text-gray-300"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/rakshitrautela7"
      className="text-white hover:text-gray-300"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://twitter.com/r0ckYrp"
      className="text-white hover:text-gray-300"
    >
      <Twitter size={20} />
    </a>
    <a
      href="mailto:rakshitrautela17@gmail.com"
      className="text-white hover:text-gray-300"
    >
      <Mail size={20} />
    </a>
  </div>
);

export default SocialLinks;
