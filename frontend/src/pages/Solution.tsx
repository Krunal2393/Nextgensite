import CategoryTabs from "../components/CategoryTabs";
import FAQAccordion from "../components/FAQAccordion";
import HotServices from "../components/HotServices";

export default function Solution() {
  return (
    <div>
      <section className="w-full min-h-screen bg-gradient-noise text-white flex flex-col justify-center">
        <div className="max-w-7xl mx-4 sm:mx-8 z-20 lg:mx-40 px-6 pt-7 text-center flex flex-col md:flex-row gap-8 md:gap-20 md:text-left">
          {/* Left Content */}
          <div className="w-full md:w-[50%]">
            <h2 className="font-semibold text-2xl md:text-[50px] leading-tight md:leading-[100%] tracking-normal">
              Funding Solutions For Every Business
            </h2>
            <p className="mt-4 text-base md:text-lg font-normal text-gray-200">
              From startups to established enterprises, we provide comprehensive
              funding solutions across all business categories with expert
              guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
              <button className="px-6 py-3 bg-[#B2B3BD] text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
                Get Funding Now
              </button>

              <button className="px-6 py-3 bg-[#B2B3BD] text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition">
                Expert Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-white rounded-xl w-full md:w-[50%] px-2 py-2 flex items-center justify-center mt-6 md:mt-0">
            <img src="/contact.png" className="w-32 md:w-2xs" alt="contact" />
          </div>
        </div>
      </section>

      <CategoryTabs />
      <HotServices />
      <FAQAccordion />
    </div>
  );
}
