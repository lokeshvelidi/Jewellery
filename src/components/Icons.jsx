import { Sparkles, Award, Shield, Truck } from "lucide-react";

export default function Icons() {
  const features = [
    { icon: Sparkles, title: "Premium Quality", desc: "Finest materials used" },
    { icon: Award, title: "Expert Craft", desc: "Handcrafted by artisans" },
    { icon: Shield, title: "Lifetime Warranty", desc: "Guaranteed durability" },
    { icon: Truck, title: "Free Shipping", desc: "Fast & secure delivery" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm 
                         hover:bg-white hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-2"
            >
              <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
