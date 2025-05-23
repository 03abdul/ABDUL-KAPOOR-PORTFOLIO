import React, { useState } from 'react';
import { SlMenu } from "react-icons/sl";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "tasks", label: "Tasks" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        <span className="text-2xl font-bold text-gray-700">
          <span className="text-[#06e3f5]">Port</span>folio
        </span>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenu(!menu)} className="lg:hidden bg-gray-500 p-2 rounded">
          <SlMenu className="w-6 h-6 text-white" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-amber-800 hover:bg-[#59c4b7] px-3 py-1 rounded transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {menu && (
        <nav className="lg:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center space-y-3 pb-4 text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenu(false)}
                  className="block w-full text-center hover:text-amber-800 hover:bg-[#59c4b7] px-4 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
