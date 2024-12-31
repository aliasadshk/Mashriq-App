const AboutUs = () => {
  return (
    <div className="bg-white px-8 py-12">
      {/* Main container jo content ko center aur grid layout deta hai */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section: Text content */}
        <div>
          {/* Heading aur subheading ke liye */}
          <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-lg font-light text-gray-600 mb-6">Excellence in Real Estate Development</p>
          
          {/* Paragraph jo company ke baare me details deta hai */}
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Welcome to Al Mashriq Group, your trusted partner in Real Estate, Project Development, and Telecommunication. 
            With over two decades of experience, we have become pioneers in these industries, having network not only in the UAE 
            but also across United States, Europe, Singapore, Saudi Arabia, and the wider region.
          </p>
          
          {/* Learn More button */}
          <button className="bg-[#b19777] text-white px-8 py-2 rounded-full hover:bg-[#794a21] transition">
            Learn More
          </button>
        </div>

        {/* Right Section: Video */}
        <div className="flex justify-center items-center">
          {/* Video jo company ka introduction show karta hai */}
          <video
            src="https://www.mashriqelite.com/frontend/video/giflogo.mp4"
            autoPlay
            loop
            muted
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
