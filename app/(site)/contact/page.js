function Contact() {
  return (
    <div className="bg-[#020617] px-5 py-16 md:px-20">
      {/* عنوان */}
      <div className="text-center mb-12">
        <h1 className="text-white font-bold text-3xl">
          Contact <span className="text-[#EAB308]">Me</span>
        </h1>
        <p className="text-[#9CA3AF] mt-4">glksdjkjfsojlkslklkes</p>
      </div>

      {/* محتوا */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* اطلاعات سمت چپ */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex flex-col md:flex-row  md:items-center">
            <label className="text-[#EAB308]">Address_</label>
            <p className="text-white">Iran, Bojnord</p>
          </div>

          <div className="flex flex-col md:flex-row  md:items-center">
            <label className="text-[#EAB308]">Phone_</label>
            <p className="text-white">+98 939 523 6615</p>
          </div>

          <div className="flex flex-col md:flex-row  md:items-center">
            <label className="text-[#EAB308]">Email_</label>
            <p className="text-white">example@gmail.com</p>
          </div>

          <div className="flex flex-col md:flex-row  md:items-center">
            <label className="text-[#EAB308]">Website_</label>
            <p className="text-white">yourwebsite.com</p>
          </div>
        </div>

        {/* فاصله وسط */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* فرم ارتباط */}
        <div className="md:col-span-5 space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1F2937] text-white w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[#EAB308]"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="bg-[#1F2937] text-white w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[#EAB308]"
          ></textarea>

          <button className="bg-[#EAB308] w-full py-3 rounded-md text-black font-semibold hover:bg-yellow-400 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
