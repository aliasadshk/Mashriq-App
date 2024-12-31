const Blogs = () => {
  return (
    <div className="bg-white p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <p className="text-xl text-gray-600">Keep updated with our blogs</p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-4   md:grid-cols-3">
        <div className=" overflow-hidden">
          <img
            src="https://mashriqelite.com/uploads/frontend/articles/24/home-in-dubai-renting-vs-buying-deciphering-the-real-estate-conundrum.jpg"
            alt="Home in Dubai"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">
              Home in Dubai: Renting vs. Buying
            </h2>
            <p className="text-sm text-gray-600">
              Dubai, a city that blends tradition with modernity, offers a
              kaleidoscope of Real Estate options...
            </p>
            <a href="#" className="text-[#b19777] font-medium">
              Read More
            </a>
          </div>
        </div>

        <div className="  overflow-hidden">
          <img
            src="https://mashriqelite.com/uploads/frontend/articles/18/unlocking-doors-a-comprehensive-guide-to-real-estate-financing-in-dubai.webp"
            alt="Unlocking Doors"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">
              Unlocking Doors: Financing Guide
            </h2>
            <p className="text-sm text-gray-600">
              Navigating the intricacies of financing is a crucial step in
              turning property aspirations into reality...
            </p>
            <a href="#" className="text-[#b19777] font-medium">
              Read More
            </a>
          </div>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://mashriqelite.com/uploads/frontend/articles/23/shaping-tomorrow-dubais-smart-city-initiatives-transforming-the-real-estate-landscape.jpg"
            alt="Shaping Tomorrow"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">Shaping Tomorrow: Smart City</h2>
            <p className="text-sm text-gray-600">
              Dubai is setting its sights on a technologically advanced future,
              transforming the Real Estate landscape...
            </p>
            <a href="#" className="text-[#b19777] font-medium">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
