import Image from "next/image";

function About() {
  return (
    <div className="bg-[#020617] min-h-screen px-6 py-16 md:px-20">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* تصویر */}
        <div className="md:col-span-6 flex justify-center">
          <div className="border-4 border-amber-400 rounded-xl h-64 w-64 relative">
            <Image
              src="/images/photo_2025-12-28_08-38-06.jpg"
              width={260}
              height={260}
              alt="profile"
              className="rounded-xl object-cover absolute bottom-3 left-3 h-60"
            />
          </div>
        </div>

        {/* متن */}
        <div className="md:col-span-6 text-center md:text-left">
          <h1 className="text-white font-bold text-3xl mb-6">
            About <span className="text-[#EAB308]">Me</span>
          </h1>

          <p className="text-[#9CA3AF] leading-7 text-lg">
            I am a Front-End Developer dedicated to crafting high-quality,
            scalable, and visually appealing digital products. With experience
            in modern JavaScript frameworks and a strong eye for detail, I aim
            to create seamless user experiences and deliver meaningful
            solutions through code.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
