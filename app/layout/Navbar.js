"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../components/ToggleTheme";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ scrollTo, active }) {
  return (
<Disclosure
  as="nav"
  className="fixed top-0 left-0 right-0 z-50
  bg-slate-100/90 dark:bg-[#020617]/90
  backdrop-blur-md
  border-b border-slate-300 dark:border-white/5
  shadow-sm dark:shadow-none"
>
  {({ open, close }) => (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Mobile button */}
          <div className="sm:hidden">
            <Disclosure.Button className="rounded-md p-2 text-slate-700 hover:bg-slate-200 hover:text-black transition dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white">
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={classNames(
                  active === item.id
                    ? "bg-yellow-500/15 text-yellow-500 dark:text-yellow-400"
                    : "text-slate-700 hover:bg-slate-200 hover:text-black dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white",
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
                )}
              >
                {item.name}
              </button>
            ))}

            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Disclosure.Panel className="sm:hidden border-t border-slate-300 bg-slate-100 dark:border-white/5 dark:bg-[#020617]">
        <div className="space-y-1 px-2 py-3">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                close();
              }}
              className={classNames(
                active === item.id
                  ? "bg-yellow-500/15 text-yellow-500 dark:text-yellow-400"
                  : "text-slate-700 hover:bg-slate-200 hover:text-black dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white",
                "block w-full rounded-lg px-3 py-2 text-left text-base font-medium transition-all duration-200"
              )}
            >
              {item.name}
            </button>
          ))}

          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
  );
}
