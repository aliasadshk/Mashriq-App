const WhyChooseUs = () => {
  return (
    <div className="bg-white px-10 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Why Choose Us</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          The Mashriq Elite Advantage: Where your vision takes priority
        </h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto">
        {/* First Row (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* Icon aur Image Section */}
            <div className="mb-4">
              <i className="text-[#b19777] text-5xl fas fa-star"></i>
            </div>
            <img
              src="https://www.mashriqelite.com/frontend/images/Experience.png"
              alt="Experience"
              className="mx-auto mb-4 max-w-full h-auto"
            />
            {/* Title aur Description */}
            <h3 className="text-xl font-semibold text-black mb-4">
              Experience
            </h3>
            <p className="text-gray-600">
              With a legacy of industry experience, we have a deep understanding
              of market dynamics and client needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <i className="text-[#b19777] text-5xl fas fa-shield-alt"></i>
            </div>
            <img
              src="https://www.mashriqelite.com/frontend/images/Quality.png"
              alt="Quality"
              className="mx-auto mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Quality</h3>
            <p className="text-gray-600">
              We are committed to delivering unparalleled quality in design,
              construction, and finishes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <i className="text-[#b19777] text-5xl fas fa-lightbulb"></i>
            </div>
            <img
              src="https://www.mashriqelite.com/frontend/images/Innovation.png"
              alt="Innovation"
              className="mx-auto mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              Our projects are at the forefront of architectural innovation,
              setting trends for others to follow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="hidden lg:block"></div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <i className="text-[#b19777] text-5xl fas fa-user-friends"></i>
            </div>
            <img
              src="https://www.mashriqelite.com/frontend/images/Experience.png"
              alt="Customer Centric"
              className="mx-auto mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Customer Centric
            </h3>
            <p className="text-gray-600">
              Your vision is our priority. We focus, understand, and tailor our
              solutions to meet your unique requirements.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <i className="text-[#b19777] text-5xl fas fa-balance-scale"></i>
            </div>
            <img
              src="https://www.mashriqelite.com/frontend/images/Transparency.png"
              alt="Transparency"
              className="mx-auto mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Transparency
            </h3>
            <p className="text-gray-600">
              We believe in open communication and transparency throughout the
              development process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
