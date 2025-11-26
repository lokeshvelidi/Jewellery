import { Truck, Headphones, BadgeCheck, CreditCard } from "lucide-react";

export default function ServiceStrip() {
  const items = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Free Delivery",
      desc: "Free shipping on all order",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Online Support",
      desc: "Support online 24 hours a day",
    },
    {
      icon: <BadgeCheck className="w-10 h-10" />,
      title: "Money Return",
      desc: "Support online 24 hours a day",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Secure Payment",
      desc: "Support online 24 hours a day",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 justify-center md:justify-start">

              {/* Icon */}
              <div className="text-black">{item.icon}</div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title.toUpperCase()}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
