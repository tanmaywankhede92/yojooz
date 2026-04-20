import React from "react";
import aboutImg from "../assets/machineImg/Hotel.jpeg"; // replace with your image path
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function AboutSection() {
  const values = [
    {
      title: "100% Natural",
      text: "Real fruit, squeezed fresh. No syrups, no concentrates, no shortcuts.",
    },
    {
      title: "Total Transparency",
      text: "You watch your juice being made. No hidden steps, no mystery ingredients.",
    },
    {
      title: "Always Hygienic",
      text: "Self-cleaning mechanisms and sealed dispensing keep every cup safe.",
    },
    {
      title: "Always Available",
      text: "Our machines run 24/7 so fresh juice is never out of reach.",
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Choose your juice",
      text: "Pick from our selection of freshly loaded fruits on the touchscreen.",
    },
    {
      id: "02",
      title: "Watch it squeeze",
      text: "The machine squeezes real fruit right in front of you in under 60 seconds.",
    },
    {
      id: "03",
      title: "Enjoy fresh",
      text: "No ice, no sugar, no preservatives. Just pure, natural goodness.",
    },
  ];

  return (
    <>
      <Navbar />{" "}
      <section
        id="about"
        className="w-full bg-[#f6f3ee] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20"
      >
        {/* top intro */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <img
                src={aboutImg}
                alt="Fresh juice machine and oranges"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[620px]"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 hidden rounded-[20px] bg-[#28b10f] px-6 py-4 text-white shadow-lg sm:block">
              <p className="text-2xl font-extrabold">Fresh</p>
              <p className="text-sm font-medium">In Under 60 Sec</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
              About Us
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Honest Juice.
              <br className="hidden sm:block" />
              Fresh by Design.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#57514c] sm:text-lg">
              YoJooz was created to make truly fresh juice easy to access in
              everyday spaces. Instead of bottled drinks filled with
              hard-to-read ingredients, we wanted a better option that is
              natural, hygienic, quick, and transparent.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#57514c] sm:text-lg">
              Our machines squeeze real fruit right in front of your eyes,
              giving you pure juice with no added sugar, no preservatives, and
              no compromise. It is freshness you can trust and convenience you
              can actually feel.
            </p>
          </div>
        </div>

        {/* our story */}
        <div className="mt-16 rounded-[30px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:p-8 lg:mt-20 lg:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
            Our Story
          </p>

          <h3 className="text-2xl font-extrabold leading-tight text-[#171717] sm:text-3xl lg:text-4xl">
            It started with a simple frustration.
          </h3>

          <div className="mt-6 space-y-5 text-base leading-8 text-[#57514c] sm:text-lg">
            <p>
              We were tired of picking up a juice bottle at a store, flipping it
              around, and reading a list of ingredients we could not pronounce.
              Preservatives, added sugars, artificial flavours, and concentrates
              were all hiding behind the word “natural” on the label.
            </p>

            <p>
              And the alternative was not always better. Fresh juice stalls were
              hard to find, inconsistent in quality, and not always the most
              hygienic option. We knew there had to be a better way.
            </p>

            <p>
              So we started asking questions. What if you could get a glass of
              truly fresh juice, squeezed right in front of your eyes, wherever
              you went? At the mall, at the gym, at the airport, or at your
              office? What if it took less than 60 seconds and cost less than a
              bottled drink?
            </p>

            <p>
              That idea became YoJooz. We built a machine that does one thing
              exceptionally well — it takes real, whole fruit and squeezes it
              fresh, on demand, every single time.
            </p>

            <p>
              No ice to water it down. No added sugar to mask the taste. No
              preservatives to extend a shelf life it does not need. Just pure,
              honest juice the way nature intended.
            </p>

            <p>
              Today, YoJooz machines are bringing fresh juice to locations
              across India — and we are just getting started. Because we believe
              that healthy should not be hard, and fresh should not be a luxury.
            </p>

            <p className="font-semibold text-[#1a1a1a]">
              Every cup we pour is a promise: what you see is exactly what you
              get.
            </p>
          </div>
        </div>

        {/* values */}
        <div className="mt-16 lg:mt-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
              Our Values
            </p>
            <h3 className="text-2xl font-extrabold leading-tight text-[#171717] sm:text-3xl lg:text-4xl">
              What We Stand For
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <h4 className="text-xl font-bold text-[#1a1a1a]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#5d5753] sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* how it works */}
        <div className="mt-16 lg:mt-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
              How It Works
            </p>
            <h3 className="text-2xl font-extrabold leading-tight text-[#171717] sm:text-3xl lg:text-4xl">
              Fresh Juice in 3 Simple Steps
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#28b10f] text-lg font-bold text-white">
                  {step.id}
                </div>

                <h4 className="mt-5 text-xl font-bold text-[#1a1a1a]">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#5d5753] sm:text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutSection;
