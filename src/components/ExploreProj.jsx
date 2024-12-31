const ExploreProjects = () => {
  return (
    <div className="bg-white px-8 py-12">
      {/* Header Section jo center aligned hai */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Explore Our Project</h1>
        <h2 className="text-2xl font-semibold text-gray-700">of Distinctive Excellence</h2>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.mashriqelite.com/frontend/images/project1.jpg"
            alt="Project Image"
            className="max-w-full h-auto -md"
          />
        </div>

        {/* Right Section: Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-black mb-4">Floarea Residence</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Where Design Transcends and Comfort Unites</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Dive into our showcase of an iconic residential project that stands as a testament to our unwavering commitment to excellence. 
            This development tells a unique story, where architecture meets functionality, and luxury merges with practicality. 
            From opulent residences to cutting-edge spaces, our project redefines the skyline and sets new standards in the Real Estate landscape.
          </p>
          {/* Learn More Button */}
          <button className="bg-[#b19777] text-white px-8 py-2 rounded-full hover:bg-[#794a21] transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProjects;
