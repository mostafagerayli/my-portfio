"use client";

function Contact() {
  return (
    <div className="bg-[#111827] dark:bg-gray-50 px-5 py-16 md:px-20">
      {/* عنوان */}
      <div className="text-center mb-12">
        <h1 className="text-white dark:text-gray-900 font-bold text-3xl">
          Contact <span className="text-[#EAB308] dark:text-amber-500">Me</span>
        </h1>
        <p className="text-gray-400 dark:text-gray-700 mt-4"></p>
      </div>

      {/* محتوا */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* اطلاعات سمت چپ */}
        <div className="md:col-span-5 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-[#EAB308] dark:text-amber-500">Address_</label>
            <p className="text-white dark:text-gray-900">Iran, Bojnord</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-[#EAB308] dark:text-amber-500">Phone_</label>
            <p className="text-white dark:text-gray-900">+98 939 523 6615</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-[#EAB308] dark:text-amber-500">Email_</label>
            <p className="text-white dark:text-gray-900">mostafagerayli778@gmail.com</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-[#EAB308] dark:text-amber-500">Website_</label>
            <p className="text-white dark:text-gray-900">yourwebsite.com</p>
          </div>
        </div>

        {/* فاصله وسط */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* فرم ارتباط */}
        <div className="md:col-span-5 space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1F2937] dark:bg-gray-200 text-white dark:text-gray-900 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[#EAB308] dark:focus:ring-amber-500"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="bg-[#1F2937] dark:bg-gray-200 text-white dark:text-gray-900 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[#EAB308] dark:focus:ring-amber-500"
          ></textarea>

          <button className="bg-[#EAB308] dark:bg-amber-500 w-full py-3 rounded-md text-black dark:text-white font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-400 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
