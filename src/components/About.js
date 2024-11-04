const About = () => (
  <div className="h-screen w-full bg-black text-white flex items-center justify-center pt-24 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Left Column: About Text */}
      <div className="space-y-8">
        <h2 className="text-5xl font-bold tracking-tight text-center md:text-left">
          r0ckYr
        </h2>
        <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
          <p>
            I am the Founding Engineer at Nixarcade, where I lead the
            development of a dynamic gaming platform. My role involves designing
            and implementing secure applications that provide an engaging user
            experience while prioritizing security and performance.
          </p>
          <p>
            I have three years of experience as a bug bounty hunter,
            specializing in web and mobile security.With a focus on web and
            mobile application security. I’ve worked with organizations such as
            Coinbase, AT&T, Rockstar Games, PayPal, Amazon, Goldman Sachs, and
            Epic Games to identify and address vulnerabilities.
          </p>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="flex justify-center items-center">
        <img
          src="/hero1.png"
          alt="Profile"
          className="w-full max-w-md rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  </div>
);

export default About;
