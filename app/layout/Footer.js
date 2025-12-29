import { HeartIcon } from "@heroicons/react/24/outline"
import { FaLinkedin, FaSquareGithub, FaTwitter } from "react-icons/fa6";
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-[#020617]/90 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
            <h1 className="text-white font-bold text-3xl">About me</h1>
              <p className="text-slate-400">
              </p>
              <p className="text-slate-500 flex items-center justify-center md:justify-start gap-1 mt-2">
                Made with using Next & Tailwind CSS
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="https://github.com/mostafagerayli" 
                className="p-1 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaSquareGithub size={20}/>

              </Link>
              <Link
                href="https://www.linkedin.com/in/mostafa-gerayli-16466a380/" 
                className="p-1 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#" 
                className="p-1 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer