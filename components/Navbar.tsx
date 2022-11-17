import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Download",
    href: "/",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav className={`p-4 py-[3rem] duration-500 transition-all `}>
      <div className="max-w-[1020px] mx-auto">
        <div className="flex w-full items-center justify-between">
          <Link className="z-[999] " href={"/"}>
            <Logo />
          </Link>

          <ul className="hidden sm:flex  gap-[3rem] items-center">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.href}>
                    <p
                      className={`font-bold ${
                        router.pathname == link.href
                          ? "text-white"
                          : "text-gray"
                      }`}
                    >
                      {link.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setOpen((open) => !open)}
            className="flex sm:hidden text-3xl p-2 bg-transparent z-[999]  text-white"
          >
            {open ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-600px" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-600px" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 pt-[148px] left-0 z-50 shadow-lg bg-black w-full p-4 h-[600px]"
          >
            <MobileMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function MobileMenu() {
  const router = useRouter();

  return (
    <div >
      {
        <ul className="flex flex-col w-full sm:hidden gap-[3rem] items-center">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>
                  <p
                    className={`font-bold ${
                      router.pathname == link.href ? "text-white" : "text-gray"
                    }`}
                  >
                    {link.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default Navbar;
