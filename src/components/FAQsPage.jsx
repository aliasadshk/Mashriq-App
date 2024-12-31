/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const FAQsPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-8 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 pl-6">FAQS</h1>
        <h2 className="text-2xl font-semibold text-white-400 pl-4">
          BENEFITS OF INVESTING WITH MASHRIQ ELITE
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: FAQ List */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div>
            <div
              className="bg-white text-black rounded-md shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(1)}
            >
              <span className="text-lg font-medium">
                What types of properties are available for sale in Dubai?
              </span>
              <span className="text-2xl font-bold">
                {activeFAQ === 1 ? "-" : "+"}
              </span>
            </div>
            {activeFAQ === 1 && (
              <div className="bg-gray-100 text-black rounded-md shadow-md p-4 mt-2">
                Dubai offers diverse property options, including apartments,
                villas, townhouses, penthouses, and more. Whether youre seeking
                a luxury villa, a modern apartment, or a commercial investment,
                Dubai's Real Estate market caters to various preferences and
                needs.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div>
            <div
              className="bg-white text-black rounded-md shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(2)}
            >
              <span className="text-lg font-medium">
                What kind of properties has Mashriq developed?
              </span>
              <span className="text-2xl font-bold">
                {activeFAQ === 2 ? "-" : "+"}
              </span>
            </div>
            {activeFAQ === 2 && (
              <div className="bg-gray-100 text-black rounded-md shadow-md p-4 mt-2">
                Mashriq has a diverse portfolio of developed properties that
                cater to various preferences and lifestyles. Our projects
                encompass a wide range of property types, including luxurious
                residential apartments, elegant villas, modern townhouses. Each
                property is designed with meticulous attention to detail,
                incorporating innovative architecture, functional design, and
                high-quality finishes. Whether you're looking for a serene
                residential retreat, a vibrant or a blend of both, Mashriq's
                portfolio offers a selection of properties that align with the
                evolving demands of Dubai's Real Estate market.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div>
            <div
              className="bg-white text-black rounded-md shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(3)}
            >
              <span className="text-lg font-medium">
                Why is Dubai a great place for Investors?
              </span>
              <span className="text-2xl font-bold">
                {activeFAQ === 3 ? "-" : "+"}
              </span>
            </div>
            {activeFAQ === 3 && (
              <div className="bg-gray-100 text-black rounded-md shadow-md p-4 mt-2">
                Dubai has historically been considered a favorable destination
                for investors due to several factors that contribute to its
                attractiveness: Strategic Location: Dubai's geographical
                location makes it a global business and travel hub, connecting
                Asia, Europe, and Africa. This strategic position enhances
                trade, commerce, and investment opportunities. Business-Friendly
                Environment: Dubai offers a business-friendly regulatory
                framework, with tax incentives, free zones, and a simplified
                company setup process, which encourages foreign direct
                investment. Stable Economy: Dubai's diverse economy is not
                solely dependent on oil. The city has developed strong sectors
                in finance, Real Estate, tourism, logistics, and technology,
                providing a stable economic foundation. Infrastructure
                Development: The city's commitment to world-class
                infrastructure, including state-of-the-art airports, ports,
                roads, and public transportation, supports economic growth and
                connectivity. Government Initiatives:: Dubai's government
                actively promotes investment through various initiatives, such
                as Dubai Expo 2020, Dubai Plan 2021, and Vision 2040, which
                outline ambitious goals for economic diversification and
                development. Real Estate Opportunities: Dubai's Real Estate
                market offers a variety of property types, from luxury
                apartments and villas. The property sector has attracted
                investors seeking rental income and capital appreciation.
                Tourism and Lifestyle: The city's growing tourism industry,
                coupled with its vibrant cultural scene, luxury shopping, and
                entertainment options, attracts both visitors and investors
                looking to tap into diverse markets. Safety and Stability: Dubai
                is known for its safety, political stability, and strong legal
                framework, creating an environment conducive to long-term
                investment.
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div>
            <div
              className="bg-white text-black rounded-md shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(4)}
            >
              <span className="text-lg font-medium">
                What makes Mashriq Elite Developers stand out in the Dubai Real
                Estate market?
              </span>
              <span className="text-2xl font-bold">
                {activeFAQ === 4 ? "-" : "+"}
              </span>
            </div>
            {activeFAQ === 4 && (
              <div className="bg-gray-100 text-black rounded-md shadow-md p-4 mt-2">
                Our extensive experience, deep market insights, and commitment
                to delivering tailored solutions set us apart in the competitive
                Dubai Real Estate landscape.
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div>
            <div
              className="bg-white text-black rounded-md shadow-md p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(5)}
            >
              <span className="text-lg font-medium">
                How can I schedule a consultation with Mashriq Elite Developers?
              </span>
              <span className="text-2xl font-bold">
                {activeFAQ === 5 ? "-" : "+"}
              </span>
            </div>
            {activeFAQ === 5 && (
              <div className="bg-gray-100 text-black rounded-md shadow-md p-4 mt-2">
                You can reach out to us through the contact form on our website,
                or simply call us at +971 54 549 5952 to set up a consultation
                with our expert team
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.mashriqelite.com/frontend/images/faq-home2.jpg"
            alt="Mashriq Elite Brochure"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
