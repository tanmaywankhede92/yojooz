// src/components/Hero.jsx
import React from "react";
import venddingmachine from "../../assets/vendding.png";

function Hero() {
  const whatsappLink =
    "https://wa.me/919370364437?text=Hello%20YoJooz%2C%20I%20want%20to%20know%20more%20about%20installing%20your%20juice%20machine.";
  return (
    <section className="bg-[#f6f4ef]">
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-[1280px] items-center gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 md:py-14 lg:px-12 lg:py-16">
        <div className="order-2 md:order-1">
          <h1 className="max-w-[580px] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-black sm:text-[2.6rem] lg:text-[4rem]">
            <span className="text-[#32b31f]">Nature’s Best,</span>
            <br />
            Squeezed on the Spot
            <br />
            in your Cup.
          </h1>

          <p className="mt-6 max-w-[560px] text-[1.05rem] font-medium leading-[1.5] text-black sm:text-[1.2rem] lg:text-[1.6rem]">
            100% Pure Orange Juice. No Additives. No Compromise.
          </p>

          <button
            className="mt-8 rounded-md bg-[#e88411] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#cf760d] sm:px-8 sm:py-3.5 sm:text-base cursor-pointer"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Chats with Us
          </button>
        </div>

        <div className="order-1 relative flex justify-center md:order-2 md:justify-end">
          <div className="absolute right-[6%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#f3d77a]/40 blur-[110px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]" />
          <div className="absolute bottom-[10%] left-[14%] h-[220px] w-[220px] rounded-full bg-[#ef9a3d]/25 blur-[110px] sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]" />
          <div className="absolute bottom-[3%] left-1/2 h-[30px] w-[65%] -translate-x-1/2 rounded-full bg-black/15 blur-[22px] sm:h-[38px] lg:h-[46px]" />

          <img
            src={venddingmachine}
            alt="YoJooz orange juice vending machine"
            className="relative z-10 w-full max-w-[260px] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.3    0)] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[470px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
