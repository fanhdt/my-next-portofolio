"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icon hamburger & close

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Tutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-3 w-full flex justify-center z-50">
      <nav className="relative flex items-center px-6 py-2 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg shadow-lg max-w-lg w-full">
        {/* Menu untuk Desktop */}
        <div className="hidden md:flex gap-6 mx-auto">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="relative text-white text-lg px-4 py-1 transition-all duration-300 group" onClick={closeMenu}>
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-emerald-300 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden text-white ml-auto" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 right-0 h-screen w-2/3 bg-gray-900 p-6 shadow-lg flex flex-col items-start gap-6 md:hidden"
            >
              <button className="text-white self-end" onClick={closeMenu}>
                <X size={24} />
              </button>

              {/* Menu Items */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                className="flex flex-col gap-4 w-full"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="relative text-white text-lg px-4 py-2 border-b border-gray-700 w-full transition-all duration-300 group"
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={closeMenu} // Tutup menu setelah klik
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-emerald-300 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
