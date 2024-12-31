function GetIT() {
  return (
    <div className="bg-white px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-gray-800 mb-2">Quick Support</h1>
        <h2 className="text-2xl font-bold text-gray-700">Get in touch</h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        {/* Map Section (7 columns) */}
        <div className="col-span-12 md:col-span-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d3610.517942100628!2d55.2748333!3d25.18575!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.18575!2d55.2748333!5e0!3m2!1sen!2s!4v1719209115504!5m2!1sen!2s"
            width="100%"
            height="450"
            className="border-0 rounded-md shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Section (4 columns) */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
          <form className="space-y-4 w-full max-w-md">
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19777]"
                placeholder="Enter Full Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19777]"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19777]"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19777]"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-[#b19777] text-white px-6 py-2 my-2 rounded hover:bg-[#a0846b] transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetIT;
