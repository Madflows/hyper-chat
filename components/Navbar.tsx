import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";

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
  return (
    <nav className="p-4 py-[3rem]">
      <div className="max-w-[1020px] mx-auto">
        <div className="flex w-full items-center justify-between">
          <Link href={"/"}>
            <Logo />
          </Link>

          <ul className="flex gap-[3rem] items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
