const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Social Links */}
        <div className="space-y-6">
          <img
            src="https://www.mashriqelite.com/frontend/images/logo-white.png"
            alt="Mashriq Elite Logo"
            className="w-32"
          />
          <div className="flex space-x-4">
            <img
              src="https://www.mashriqelite.com/frontend/images/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
            <img
              src="https://www.mashriqelite.com/frontend/images/instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <img
              src="https://www.mashriqelite.com/frontend/images/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <img
              src="https://www.mashriqelite.com/frontend/images/tik-tok.png"
              alt="TikTok"
              className="w-6 h-6"
            />
          </div>
          <p className="text-sm text-gray-400">Copyright © 2024. All Rights Reserved.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Divisions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <p className="text-sm">Main Office - 906</p>
          <p className="text-sm">Sales Center - 29th floor,</p>
          <p className="text-sm">West Burry Business Tower,</p>
          <p className="text-sm">Business Bay, Dubai</p>
        </div>

        {/* Newsletter Sign Up */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter Sign Up</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-white-700 text-grey py-2 rounded hover:bg-gray-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
