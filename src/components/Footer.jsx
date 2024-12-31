const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="space-y-4 md:ml-4">
          {" "}
          <img src="https://www.mashriqelite.com/frontend/images/logo-white.png" />
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
          <p className="text-sm">Copyright © 2024. All Rights Reserved.</p>
        </div>

        <div>
          <h3 className="text-lg font-semi-bold mb-4">Useful Links</h3>
          <ul className="space-y-5">
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
          <h2 className="mb-4">Location</h2>
          <p>Main Office - 906</p>
          <p>Sales Center - 29th floor,</p>
          <p>West Burry Business Tower,</p>
          <p>Business Bay, Dubai</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter Sign Up</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded bg-white-800 text-grey placeholder-gray-400"
            />

            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
