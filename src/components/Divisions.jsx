const Divisions = () => {
  return (
    <div className="bg-[#2a2626] text-white py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <h1 className="text-4xl font-bold text-white mb-2">Divsions </h1>
          Comprehensive Real Estate solutions tailored to your needs
        </h2>
        <p className="text-lg mt-4">
          At Mashriq Elite Developments, we offer a comprehensive suite of
          services that cover every aspect of Real Estate development. Our
          services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Project Planning */}
        <div className="border border-[#da8652]  p-6 text-center shadow-md transition-transform transform">
          <img
            src="https://www.mashriqelite.com/frontend/images/services-pic1.jpg"
            alt="Project Planning"
            className="w-4/5 mx-auto -md"
          />
          <h2 className="text-2xl font-semibold mt-4">Project Planning</h2>
          <p className="text-gray-400 mt-2">
            Meticulous planning that ensures the seamless execution of every
            project.
          </p>
          <button className="bg-[#b19777] text-white px-6 py-2 rounded-full hover:bg-[#794a21] transition mt-4 mb-2">
            Learn More
          </button>
        </div>

        {/* Design House */}
        <div className=" border border-[#da8652] p-6 text-center shadow-md transition-transform transform">
          <img
            src="https://www.mashriqelite.com/frontend/images/Design-House-Sketchqw.jpg"
            alt="Design House"
            className="w-4/5 mx-auto -md"
          />
          <h2 className="text-2xl font-semibold mt-4">Design House</h2>
          <p className="text-gray-400 mt-2">
            Innovative design that combines aesthetics with functionality.
          </p>
          <button className="bg-[#b19777] text-white px-6 py-2 rounded-full hover:bg-[#794a21] transition mt-4 mb-2">
            Learn More
          </button>
        </div>
        <div className="border border-[#da8652] p-6 text-center shadow-md transition-transform transform">
          <img
            src="https://www.mashriqelite.com/frontend/images/homekey.jpg"
            alt="Project Planning"
            className="w-4/5 mx-auto -md"
          />
          <h2 className="text-2xl font-semibold mt-4">Property Management</h2>

          <p className="text-gray-400 mt-2">
            Turning properties into profitable assets.
          </p>
          <button className="bg-[#b19777] text-white px-6 py-2 rounded-full hover:bg-[#794a21] transition mt-4 mb-2">
            Learn More
          </button>
        </div>
        <div className="border border-[#da8652]  p-6 text-center shadow-md transition-transform transform">
          <img
            src="https://www.mashriqelite.com/frontend/images/services-pic5.jpg"
            alt="Project Planning"
            className="w-4/5 mx-auto -md"
          />
          <h2 className="text-2xl font-semibold mt-4">
            {" "}
            Project Consultation{" "}
          </h2>
          <p className="text-gray-400 mt-2">
            Informed insights to guide you in making sound Real Estate
            decisions.
          </p>
          <button className="bg-[#b19777] text-white px-6 py-2 rounded-full hover:bg-[#794a21] transition mt-4 mb-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Divisions;
