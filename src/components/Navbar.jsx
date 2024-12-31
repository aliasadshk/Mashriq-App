import logo from "../Images/logo.png";  // Importing logo image

const Navbar = () => {
  return (
    <div className="relative w-full min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.mashriqelite.com/frontend/video/Mashriq-Web.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="relative z-10 mt-2">
        <nav className="bg-black bg-opacity-70 text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <img src={logo} alt="Mashriq Elite Logo" className="h-16 w-auto" />

            <ul className="hidden md:flex gap-6">
              <li><a href="#home" className="hover:text-teal-400">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
              <li><a href="#divisions" className="hover:text-teal-400">Divisions</a></li>
              <li><a href="#media" className="hover:text-teal-400">Media Center</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
