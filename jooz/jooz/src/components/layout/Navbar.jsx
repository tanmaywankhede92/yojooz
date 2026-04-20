import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
  ];

  const navLinkClasses = ({ isActive }) =>
    `relative text-[14px] transition-colors duration-200 ${
      isActive
        ? "font-semibold text-[#e88411]"
        : "font-normal text-black/80 hover:text-black"
    }`;

  return (
    <header className="w-full bg-[#f7f5f1]">
      <div className="mx-auto w-full overflow-hidden bg-white px-4 sm:px-6 lg:px-10 border-b border-black/10">
        <div className="flex h-[78px] items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="YoJooz logo"
              className="h-18  w-auto object-contain"
            />
          </NavLink>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative pb-1 text-[14px] transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-[#e88411] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#e88411] after:content-['']"
                      : "font-normal text-black/80 hover:text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#e88411] px-5 py-2 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#cf760d]"
            >
              Contact Us
            </NavLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-black/10 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-[15px] ${
                      isActive
                        ? "font-semibold text-[#e88411]"
                        : "font-medium text-black"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-[4px] bg-[#e88411] px-5 py-2 text-[14px] font-semibold text-white"
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
