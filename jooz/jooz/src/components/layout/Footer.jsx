import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `transition ${
        isActive
          ? "text-[#28b10f] font-semibold drop-shadow-[0_0_6px_rgba(40,177,15,0.6)]"
          : "text-[#1d1d1d] hover:text-[#28b10f]"
      }`
    }
  >
    About
  </NavLink>;

  return (
    <footer className="w-full bg-[#f6f3ee]">
      <div className="w-full overflow-hidden bg-white">
        {/* CTA Section */}
        <div className="border-b border-[#eee7df] px-10 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-[#1d1d1d] md:text-4xl">
                Bring Fresh Juice Closer to Your Customers
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[#5d5753]">
                Install our smart orange juice machine in gyms, offices, malls,
                and campuses to serve fresh and natural juice on the spot.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#28b10f] px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#22980d]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 px-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-extrabold tracking-tight text-[#f08b13]">
              YoJooz
            </h3>
            <p className="mt-4 max-w-xs text-base leading-9 text-[#5d5753]">
              Freshly squeezed juice vending machines designed for high-footfall
              spaces with a healthy, modern, and convenient experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold text-[#1d1d1d]">Quick Links</h4>
            <ul className="mt-5 space-y-4 text-base">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#28b10f] font-semibold drop-shadow-[0_0_6px_rgba(40,177,15,0.6)]"
                      : "text-[#1d1d1d] hover:text-[#28b10f]"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#28b10f] font-semibold drop-shadow-[0_0_6px_rgba(40,177,15,0.6)]"
                      : "text-[#1d1d1d] hover:text-[#28b10f]"
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#28b10f] font-semibold drop-shadow-[0_0_6px_rgba(40,177,15,0.6)]"
                      : "text-[#1d1d1d] hover:text-[#28b10f]"
                  }
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#28b10f] font-semibold drop-shadow-[0_0_6px_rgba(40,177,15,0.6)]"
                      : "text-[#1d1d1d] hover:text-[#28b10f]"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Best For */}
          <div>
            <h4 className="text-2xl font-bold text-[#1d1d1d]">Best For</h4>
            <ul className="mt-5 space-y-4 text-base text-[#1d1d1d]">
              <li>Gyms & Fitness Centers</li>
              <li>Transit Hubs</li>
              <li>Shopping Malls</li>
              <li>Universities & Campuses</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-w-md">
            <h4 className="text-2xl font-bold text-[#1d1d1d] mb-6">
              Contact Info
            </h4>

            {/* Address */}
            <div className="mb-2">
              <p className="text-sm font-semibold text-[#f08b13] mb-1">
                Address
              </p>
              <p className="text-base text-[#1d1d1d] leading-relaxed">
                106, Rajdhani Palace,
                <br />
                Opp. Indian Oil Petrol Pump,
                <br />
                Telephone Exchange Square,
                <br />
                Gangabai Ghat Road,
                <br />
                Nagpur – 440008
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm font-semibold text-[#f08b13] mb-1">Phone</p>
              <a
                href="https://wa.me/919370364437?text=Hello%20YoJooz%2C%20I%20want%20to%20know%20more%20about%20installing%20your%20juice%20machine."
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#1d1d1d] hover:text-[#25D366] transition"
              >
                +91 93703 64437
              </a>
            </div>

            {/* Email */}
            <div className="mt-3">
              <p className="text-sm font-semibold text-[#f08b13] mb-1">Email</p>
              <p className="text-base text-[#1d1d1d] leading-relaxed">
                info@yojooz.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#eee7df] px-10 py-5">
          <div className="flex flex-col gap-3 text-sm text-[#6a645f] md:flex-row md:items-center md:justify-between">
            <p>© {year} YoJooz. All rights reserved</p>

            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="transition hover:text-[#28b10f]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="transition hover:text-[#28b10f]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
