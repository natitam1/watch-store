import React from "react";
import Logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "#services",
  },
];

const DropDownLinks = [
  {
    name: "Top Sellers",
    link: "#",
  },
  {
    name: "New Arrivals",
    link: "#",
  },
  {
    name: "Trending Now",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md w-full bg-white dark:bg-gray-900 duration-200 relative z-40">
        <div className="container py-3 md:py-0">
          <div className="flex items-center justify-between">
            <div>
              {/* Logo Section */}
              <div>
                <a
                  href="#"
                  className="flex items-center text-2xl sm:text-3xl gap-2"
                >
                  <img src={Logo} alt="logo" className="w-10" />
                  <span className="font-bold">Watch</span> Store
                </a>
              </div>
            </div>
            {/* Menu Section */}
            <div className="flex items-center justify-between gap-2 lg:gap-8">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden md:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-2 hover:text-primary font-semibold text-[18px] rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Simple Menu DropDown */}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] h-[72px] text-[18px] font-semibold"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* Drop Down Menu */}
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] group-hover:block bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-md p-2">
                    <ul className="space-y-4">
                      {DropDownLinks.map((link) => (
                        <li
                          key={link.name}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 text-[18px] font-semibold"
                        >
                          <a href={link.link}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              {/* Cart Section */}
              <div className="group cursor-pointer">
                <button
                  onClick={() => alert("Cart Is Empty")}
                  className="hover:bg-gradient-to-r group-hover:from-primary hover:to-secondary group-hover:scale-105 duration-200 py-1 px-4 rounded-full"
                >
                  <FaCartShopping className="text-2xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
