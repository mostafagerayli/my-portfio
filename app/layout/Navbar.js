"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
      className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur border-b border-white/5"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile button */}
              <div className="sm:hidden">
                <Disclosure.Button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={classNames(
                      active === item.id
                        ? "text-yellow-400 bg-white/5"
                        : "text-slate-400 hover:text-white hover:bg-white/5",
                      "px-4 py-2 rounded-md text-sm font-medium transition"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden bg-[#020617] border-t border-white/5">
            <div className="px-2 py-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    close();
                  }}
                  className={classNames(
                    active === item.id
                      ? "text-yellow-400 bg-white/5"
                      : "text-slate-400 hover:text-white hover:bg-white/5",
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
