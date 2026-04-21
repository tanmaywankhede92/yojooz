// HomeSections.jsx
import React, { useRef } from "react";
import gym from "../../assets/machineImg/gym.jpeg";
import transitHub from "../../assets/machineImg/Airport.jpeg";
import shoppingMall from "../../assets/machineImg/Mall.jpeg";
import university from "../../assets/machineImg/college.jpeg";
import bg from "../../assets/view.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const spaces = [
  {
    id: 1,
    title: "Gym",
    image: gym,
  },
  {
    id: 2,
    title: "Transit Hub",
    image: transitHub,
  },
  {
    id: 3,
    title: "Shopping Mall",
    image: shoppingMall,
  },
  {
    id: 4,
    title: "University",
    image: university,
  },
];

function SpaceCard({ title, image }) {
  return (
    <div className="group min-w-[280px] shrink-0 snap-start sm:min-w-[340px] lg:min-w-[380px]">
      <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-72 lg:h-100"
        />
      </div>

      <h3 className="mt-3 text-center text-sm font-semibold text-[#1f1f1f] sm:text-base">
        {title}
      </h3>
    </div>
  );
}

function LocationSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f6f3ee] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Boost Foot Traffic & Wellness
            <br className="hidden sm:block" />
            in Your Space.
          </h2>

          <div className="flex items-center gap-3 md:pt-2">
            <button
              onClick={scrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b9b1ad] text-white transition hover:bg-[#a39b97]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e67e00] text-white transition hover:bg-[#cc6f00]"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {spaces.map((item) => (
            <SpaceCard key={item.id} title={item.title} image={item.image} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="rounded-md bg-[#28b10f] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22970d]"
            onClick={() => (window.location.href = "/gallery")}
          >
            View more
          </button>
        </div>
      </div>
    </section>
  );
}

function NatureSection() {
  return (
    <section className="w-full py-6 sm:py-10 lg:pb-20">
      <div className="w-full">
        <div
          className="relative w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat sm:rounded-[24px] lg:rounded-[28px]"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex min-h-[560px] items-center justify-center px-4 py-8 sm:min-h-[620px] sm:px-6 md:px-8 lg:min-h-[720px] lg:justify-start lg:px-16">
            <div className="w-full max-w-[290px] rounded-[24px] border-2 border-[#2db316] bg-[#f5f2ee] px-5 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:max-w-[340px] sm:rounded-[28px] sm:px-7 sm:py-8 md:max-w-[360px] lg:max-w-[380px] lg:rounded-[32px] lg:px-8 lg:py-10">
              <div className="space-y-6 text-center sm:space-y-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-[#25b20f] sm:text-4xl lg:text-5xl">
                    100%
                  </h3>
                  <p className="mt-3 text-2xl font-bold leading-tight text-[#2a2a2a] sm:mt-4 sm:text-3xl lg:text-4xl">
                    Natural Fruit
                    <br />
                    Squeezed in
                    <br />
                    the glass
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-[#25b20f] sm:text-4xl lg:text-5xl">
                    No
                  </h3>
                  <p className="mt-3 text-2xl font-bold leading-tight text-[#2a2a2a] sm:mt-4 sm:text-3xl lg:text-4xl">
                    Added Sugar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#ffb100]/20 blur-3xl sm:h-36 sm:w-36 lg:bottom-[12%] lg:h-56 lg:w-56" />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const whatsappLink =
    "https://wa.me/919370364437?text=Hello%20YoJooz%2C%20I%20want%20to%20know%20more%20about%20your%20juice%20machine.%20Please%20share%20details.";
  return (
    <section className="bg-[#f6f3ee] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
            Contact Us
          </p>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Want our Machine at your Vicinity?
          </h2>

          <p className="mt-8 text-base font-medium leading-8 text-[#1f1f1f] sm:text-lg">
            Why settle for bottled juice when you can have a glass squeezed
            right in front of you? Our smart vending machines are popping up in
            gyms, offices, malls, and transit hubs across the city. Whether
            you’re heading to a workout or on your morning commute, pure, 100%
            natural orange juice is never more than a few steps away.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-[22px] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#28b10f] text-white">
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

            <div className="flex items-start gap-4 rounded-[22px] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1d1d1d]">WhatsApp</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-[#1d1d1d] transition hover:text-[#25D366]"
                >
                  +91 93703 64437
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-[22px] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e88411] text-white">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1d1d1d]">
                  Quick Enquiry
                </h3>
                <p className="mt-1 text-[#5d5753]">
                  Tap the button below to start your enquiry instantly on
                  WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5cc76]/45 blur-[110px] sm:h-[380px] sm:w-[320px] lg:h-[430px] lg:w-[360px]" />
          <div className="absolute left-1/2 top-[58%] h-[240px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ef9b45]/25 blur-[100px] sm:h-[280px] sm:w-[260px] lg:h-[320px] lg:w-[290px]" />
          <div className="absolute bottom-[6%] left-1/2 h-[34px] w-[72%] -translate-x-1/2 rounded-full bg-[#8a4b12]/18 blur-[26px] sm:h-[42px] sm:w-[68%] lg:h-[50px] lg:w-[62%]" />

          <div className="relative z-10 w-full max-w-[390px] rounded-[28px] border-[3px] border-[#23b20f] bg-[#f7f4f1] px-5 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7 lg:max-w-[410px] lg:px-7 lg:py-8">
            <h3 className="mb-3 text-center text-2xl font-extrabold text-black sm:text-3xl">
              Contact Us
            </h3>

            <p className="mb-6 text-center text-sm leading-6 text-[#5d5753] sm:text-base">
              Send your location or enquiry directly on WhatsApp.
            </p>

            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919370364437"
                className="flex h-14 w-full items-center justify-center rounded-2xl border border-[#d7d2cf] bg-[#eceaea] px-4 text-sm font-semibold text-[#1f1f1f] transition hover:border-[#23b20f] hover:text-[#23b20f]"
              >
                Call Now
              </a>

              <div className="rounded-2xl border border-[#d7d2cf] bg-[#eceaea] px-4 py-4 text-sm font-medium text-[#1f1f1f]">
                <p className="font-semibold">Nagpur, Maharashtra, India</p>
                <p className="mt-1">
                  Available for machine enquiries and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function View() {
  return (
    <>
      <NatureSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
