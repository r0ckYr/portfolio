import React from "react";

const Experience = () => (
  <div className="bg-black py-24 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-white text-center md:text-left tracking-tight">
          What I do
        </h2>

        <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Founding Engineer
          </h3>
          <p className="text-lg text-zinc-300 mb-4">
            <a
              href="https://nixarcade.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors underline decoration-dotted"
            >
              Nixarcade
            </a>{" "}
            — a gaming platform. Building the future of gaming.
          </p>
          <p className="text-lg text-zinc-300 mb-4">
            I lead the development of a dynamic gaming platform. My role
            involves designing and implementing secure applications that provide
            an engaging user experience while prioritizing security and
            performance.
          </p>
          <p className="text-sm text-zinc-400">
            Check out the company's Twitter:{" "}
            <a
              href="https://x.com/NIXARCADE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors underline decoration-dotted"
            >
              @NIXARCADE
            </a>
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Bug Bounty Hunter
          </h3>
          <p className="text-lg text-zinc-300 mb-4">
            Actively finding and reporting security vulnerabilities on major
            platforms.
          </p>
          <p className="text-sm text-zinc-400">
            View my profile on HackerOne:{" "}
            <a
              href="https://hackerone.com/r0ckyr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors underline decoration-dotted"
            >
              @r0ckYr
            </a>
          </p>
        </div>
      </div>

      {/* Right Column: Photo */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-white rounded-full opacity-25 group-hover:opacity-50 blur transition duration-300"></div>
          <img
            src="/hero1.png"
            alt="Rakshit Rautela"
            className="relative w-80 h-80 object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
