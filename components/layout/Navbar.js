'use client'
import Link from "next/link";
import ThemeSwitcher from "../ui/ThemeSwitcher";

function Navbar() {
  return (
    <nav>
    <ul className="pl-4 flex gap-8 shadow-2xl bg-slate-100 h-10 item-center">
      <Link href='/'>Home</Link>
      <Link href='about'>about</Link>
      <Link href='/contact'>contact</Link>
    <ThemeSwitcher />
    </ul>
    </nav>
  );
}

export default Navbar;
