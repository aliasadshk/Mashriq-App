function Expo2() {
  return (
    <div className="bg-white px-8 py-12">
      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Floarea Residence
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            The Address of Limitless Possibilities
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Ascend to a new level of luxury at Floareá Vista. The newest gem in
            Al Furjan prestigious community, this Mashriq Elite Developments
            masterpiece offers unparalleled architectural brilliance. Immerse
            yourself in a world of seamless connectivity, curated leisure
            experiences, and a distinguished address. Floareá Vista - where
            refined living meets limitless possibilities.
          </p>
          {/* Learn More Button */}
          <button className="bg-[#b19777] text-white px-8 py-2 rounded-full hover:bg-[#794a21] transition">
            Learn More
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.mashriqelite.com/frontend/images/fv.jpg"
            alt="Project Image"
            className="max-w-full h-auto -md"
          />
        </div>
      </div>
    </div>
  );
}

export default Expo2;
