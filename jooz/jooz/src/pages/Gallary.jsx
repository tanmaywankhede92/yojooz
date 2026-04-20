import React from "react";

import gallery1 from "../assets/machineImg/gym.jpeg";
import gallery2 from "../assets/machineImg/Airport.jpeg";
import gallery4 from "../assets/machineImg/Mall.jpeg";
import gallery3 from "../assets/machineImg/college.jpeg";
import gallery5 from "../assets/machineImg/Hotel.jpeg";
import gallery6 from "../assets/machineImg/School.jpeg";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function GallerySection() {
  const galleryItems = [
    {
      image: gallery1,
      title: "Freshly Squeezed",
      desc: "Pure orange juice served fresh with no added sugar or preservatives.",
    },
    {
      image: gallery2,
      title: "Smart Juice Machines",
      desc: "Modern vending experience designed for speed, hygiene, and convenience.",
    },
    {
      image: gallery3,
      title: "Perfect for Gyms",
      desc: "Healthy juice access for fitness centers and active communities.",
    },
    {
      image: gallery4,
      title: "Mall Installations",
      desc: "Bring fresh juice closer to shoppers in high-footfall spaces.",
    },
    {
      image: gallery5,
      title: "On-the-Spot Service",
      desc: "Watch real fruit get squeezed right in front of your eyes.",
    },
    {
      image: gallery6,
      title: "Healthy Everyday Choice",
      desc: "A refreshing option for offices, campuses, airports, and more.",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="gallery"
        className="w-full bg-[#f6f3ee] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#28b10f]">
            Gallery
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            A Closer Look at YoJooz
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#57514c] sm:text-lg">
            Explore our fresh juice machines, real fruit process, and smart
            installations designed for malls, gyms, offices, campuses, and other
            high-footfall spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px] lg:h-[550px] "
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d5753] sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GallerySection;
