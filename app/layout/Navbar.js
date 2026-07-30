"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../components/ToggleTheme";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ scrollTo, active }) {
  return (
    <Disclosure
      as="nav"
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-slate-200/80
        bg-white/80 backdrop-blur-md
        shadow-sm
        transition-colors duration-300
        dark:border-slate-800
        dark:bg-slate-950/80
      "
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3"
            >
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  bg-slate-900
                  text-sm font-bold text-white
                  dark:bg-white dark:text-slate-900
                "
              >
                M
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Mostafa Gerayli
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Frontend Developer
                </p>
              </div>
            </button>


            {/* Desktop Menu */}
            <div className="hidden items-center gap-2 sm:flex">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={classNames(
                    active === item.id
                      ? "border border-yellow-500/30 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white",
                    "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
                  )}
                >
                  {item.name}
                </button>
              ))}

              <div className="ml-5">
                <ThemeToggle />
              </div>
            </div>


            {/* Mobile Button */}
            <div className="sm:hidden">
              <Disclosure.Button
                className="
                  rounded-lg p-2
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  dark:text-slate-200
                  dark:hover:bg-slate-800/70
                "
              >
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>

          </div>


          {/* Mobile Menu */}
          <Disclosure.Panel
            className="
              border-t border-slate-200/80
              bg-white/80
              backdrop-blur-md
              dark:border-slate-800
              dark:bg-slate-950/80
              sm:hidden
            "
          >
            <div className="space-y-2 px-3 py-4">

              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    close();
                  }}
                  className={classNames(
                    active === item.id
                      ? "border border-yellow-500/30 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70",
                    "block w-full rounded-lg px-3 py-2 text-left text-base font-medium transition-all"
                  )}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex justify-center pt-3">
                <ThemeToggle />
              </div>

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}