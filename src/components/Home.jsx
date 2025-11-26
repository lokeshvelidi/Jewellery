import React, { useEffect, useState } from "react";

import ring1 from "../assets/three-nice-wedding-rings-closeup.jpg";
import ring2 from "../assets/man-holds-red-box-with-wedding-rings.jpg";
import ring3 from "../assets/ring3.jpg";
import img from "../assets/Gemini_Generated_Image_hmiw9whmiw9whmiw.png";
import img2 from "../assets/Gemini_Generated_Image_yjhl7myjhl7myjhl.png";


const images = [img2, ring2, ring1];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="w-full">
      <div
        className="h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="h-full w-full bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-xl">
              Timeless Jewellery Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Discover handcrafted pieces that reflect elegance, purity, and everlasting beauty.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
        {/* <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

       
        <div>
          <img
            src={ring2}
            alt="Jewellery"
            className="w-full h-[500px] rounded-2xl shadow-xl object-cover"
          />
        </div>

        
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-amber-700 mb-6">
            Crafted With Love & Luxury
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our handcrafted jewellery pieces are designed to reflect grace,
            elegance, and timeless beauty. Every gem, metal, and detail is chosen
            with precision to create something truly extraordinary.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            From traditional classics to modern luxury designs, each piece
            is a testament to craftsmanship and passion, made to make you shine.
          </p>

          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-700 transition-all">
            Explore Collection
          </button>
        </div>

      </div>
    </section> */}


    </div>
        <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE IMAGE */}
        <div className="h-[600px] md:h-auto">
          <img
            src={img}
            alt="Jewellery Model"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="relative flex items-center bg-white py-16 px-10 md:px-16">

          {/* Light Gray Background Block Behind Text */}
          <div className="absolute left-0 top-0 h-full w-3/4 bg-gray-100 -z-10"></div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              OUR STORY: CRAFTING <br /> TIMELESS ELEGANCE
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <button className="px-8 py-3 bg-gray-400 text-white font-semibold rounded shadow hover:bg-gray-500 transition">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
