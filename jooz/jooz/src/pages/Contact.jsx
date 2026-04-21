import React from "react";
import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function ContactSection() {
  const whatsappLink =
    "https://wa.me/919370364437?text=Hello%20YoJooz%2C%20I%20want%20to%20know%20more%20about%20installing%20your%20juice%20machine.";

  return (
    <>
      <Navbar />{" "}
      <section
        id="contact"
        className="w-full bg-[#f6f3ee] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
            Contact Us
          </p>

          <h2 className="text-3xl font-extrabold leading-tight -tracking-[-0.06em] text-[#171717] sm:text-4xl lg:text-5xl">
            Let’s Bring Fresh Juice
            <br className="hidden sm:block" />
            Closer to Your Customers
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#57514c] sm:text-lg">
            Want to install a YoJooz machine at your location? Reach out to us
            for malls, gyms, offices, campuses, and other high-footfall spaces.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Info Card */}
          <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
            <h3 className="text-xl font-extrabold text-[#171717] sm:text-2xl">
              Get in Touch
            </h3>

            <p className="mt-4 text-base leading-8 text-[#5d5753] sm:text-base">
              We would love to hear from you. Whether you are interested in
              business installation, partnerships, or location enquiries, our
              team is ready to help.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-[20px] bg-[#f9f6f1] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#28b10f] text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d1d1d]">Address</h3>
                  <p className="text-base text-[#1d1d1d] leading-relaxed">
                    106, Rajdhani Palace, Opp. Indian Oil Petrol Pump,
                    <br />
                    Telephone Exchange Square, Gangabai Ghat Road,
                    <br />
                    Nagpur – 440008
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[20px] bg-[#f9f6f1] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171717]">
                    WhatsApp Us
                  </h4>
                  <ul className="mt-2 space-y-1 text-[#5d5753]">
                    <li>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#171717] transition hover:text-[#25D366]"
                      >
                        +91 93703 64437
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[20px] bg-[#f9f6f1] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e88411] text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171717]">Email</h4>
                  <p className="mt-2 text-[#5d5753]">info@yojooz.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[20px] bg-[#f9f6f1] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#28b10f] text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171717]">
                    Working Hours
                  </h4>
                  <p className="mt-2 text-[#5d5753]">
                    Monday - Saturday, 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
            <h3 className="text-xl font-extrabold text-[#171717] sm:text-2xl">
              Start Your Query on WhatsApp
            </h3>

            <p className="mt-4 text-base leading-8 text-[#5d5753] sm:text-base">
              Tap the button below and send us your enquiry directly on
              WhatsApp. We’ll help you with machine installation, partnerships,
              and location availability.
            </p>

            <div className="mt-8 rounded-[24px] bg-[#f9f6f1] p-6">
              <h4 className="text-xl font-bold text-[#171717]">
                What you can ask us
              </h4>

              <ul className="mt-4 space-y-3 text-[#5d5753]">
                <li>• Installation at malls, gyms, offices, and campuses</li>
                <li>• Franchise and partnership opportunities</li>
                <li>• Machine pricing and business enquiry</li>
                <li>• Availability in your city or location</li>
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-[14px] bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#1ebe5d] sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-[20px] border border-[#e7e0d8] bg-[#fcfaf7] p-5">
              <p className="text-sm leading-7 text-[#5d5753] sm:text-base">
                Prefer email instead? Write to us at{" "}
                <span className="font-semibold text-[#171717]">
                  info@yojooz.in
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactSection;
