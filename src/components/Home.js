import SocialLinks from "./SocialLinks";
import Experience from "./Experience";

const Home = () => (
  <div className="w-full bg-black text-white overflow-y-auto">
    {/* Home Content */}
    <div className="h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6 tracking-tight">
          Rakshit Rautela
        </h1>
        <p className="text-2xl text-gray-300 mb-8 tracking-wide">
          Developer & Security Researcher
        </p>
        <SocialLinks />
      </div>
    </div>

    {/* Experience Section */}
    <Experience />
  </div>
);

export default Home;
