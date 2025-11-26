import img from "../assets/ring1.jpg";
import img2 from "../assets/ring2.jpg";
import img3 from "../assets/ring3.jpg";
import img4 from "../assets/ring4.jpg";
import img5 from "../assets/ring5.jpg";
import img6 from "../assets/ring6.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function Products() {
  const phoneNumber = "918770655849"; // your WhatsApp number


  const items = [
    { id: 1, title: "Ring", price: "₹500", img },
    { id: 2, title: " Ring", price: "₹500", img: img2 },
    { id: 3, title: "Ring", price: "₹500", img: img3 },
    { id: 4, title: "Ring", price: "₹500", img: img4 },
    { id: 5, title: "Ring", price: "₹500", img: img5 },
    { id: 6, title: "Ring", price: "₹500", img: img6 },
  ];

  const handleWhatsApp = (item) => {
    const message = `Hello! I'm interested in the product: ${item.title} (Price: ${item.price}). Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-10">
          Our Collections
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleWhatsApp(item)}
              className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden 
                         hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-amber-700 font-semibold text-lg mb-2">
                    {item.price}
                  </p>

                  <p className="text-gray-600 text-sm">
                    Click to inquire on WhatsApp
                  </p>
                </div>

                {/* WhatsApp Icon */}
                <div className="mt-0 flex justify-end">
                  <div className="bg-green-500 p-2 rounded-full shadow hover:bg-green-600 transition">
                    <FaWhatsapp className="text-white w-full h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
