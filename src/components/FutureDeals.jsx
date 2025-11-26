import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import model from "../assets/Gemini_Generated_Image_g0sxlg0sxlg0sxlg.png";
import mod from "../assets/ring1.jpg";
import mod2 from "../assets/ring3.jpg";


const products = [
  {
    id: 1,
    modelImg: model,       // Left side image
    productImg: mod,   // Large product image
    title: "GOLDEN DUSK",
    // price: "2,300.00 US",
    description:
      "Effect font move vertical share. Connection frame edit export arrow. Undo device move opacity image layer. List star blur strikethrough arrow.",
    
  },
  {
    id: 2,
    modelImg: mod2,
    productImg: mod2,
    title: "RADIANT GLOW",
    // price: "1,850.00 USD",
    description:
      "Premium handcrafted design with brilliant cut stones. Experience shine, beauty and elegance.",
   
  },
];

export default function FeaturedDeals() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const p = products[index];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE (MODEL IMAGE) */}
        <div className="relative">
          <div className="absolute top-6 left-6 bg-blue-900 text-white px-4 py-1 text-sm tracking-wide">
            FEATURED DEALS
          </div>

          <img
            src={p.modelImg}
            className="w-full h-[600px] object-cover"
            alt="Model"
          />
        </div>

        {/* RIGHT SIDE PRODUCT DETAILS */}
        <div className="bg-[#0A223D] text-white p-10 relative">

          {/* On Sale Tag */}
          <div className="absolute top-6 left-6 bg-gray-400 text-white px-4 py-1 text-sm">
            On Sale
          </div>

          {/* PRODUCT IMAGE */}
          <div className="flex items-center justify-center relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeft />
            </button>

            <img
              src={p.productImg}
              alt="Product"
              className="w-60 md:w-72 h-[300px] drop-shadow-xl"
            />

            <button
              onClick={nextSlide}
              className="absolute right-0 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronRight />
            </button>
          </div>

          {/* PRODUCT DETAILS */}
          <h2 className="text-3xl font-serif font-bold mt-6">{p.title}</h2>
          {/* <p className="text-xl font-semibold mt-2">${p.price}</p> */}

          <p className="text-gray-300 mt-4 leading-relaxed max-w-md">
            {p.description}
          </p>

          {/* <div className="mt-6 space-y-2">
            <p className="text-sm">
              <span className="font-semibold">SKU:</span> {p.sku}
            </p>
            <p className="text-sm">
              <span className="font-semibold">STOCK:</span> {p.stock}
            </p>
          </div> */}

          {/* ADD TO CART BUTTON */}
          {/* <button className="mt-8 bg-gray-400 text-white px-8 py-3 text-lg rounded hover:bg-gray-500 transition">
            Add to Cart
          </button> */}

          {/* SLIDER INDICATORS */}
          <div className="flex justify-center gap-2 mt-10">
            {products.map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i === index ? "bg-gray-400" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
