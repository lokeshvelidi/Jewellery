import React from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Header({ onNavigate }) {
  const [open, setOpen] = React.useState(false);

  const navItems = ["Home"];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <ShoppingBag className="w-8 h-8 text-amber-600" />
            <span className="text-2xl font-serif font-bold text-amber-700">
              Elegance
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item.toLowerCase());
                  setOpen(false);
                }}
                className="block w-full text-left text-gray-700 py-2 px-2 rounded hover:bg-amber-100 hover:text-amber-700 transition"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
