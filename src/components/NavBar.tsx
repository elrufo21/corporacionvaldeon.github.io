import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Iconos del menú

const links = ["Inicio", "Servicios", "Nosotros", "Contacto"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo animado */}
        <motion.div className="text-2xl font-bold flex space-x-1">
          {"CORPORACION VALDEON".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ color: "#ffffff" }}
              animate={{
                color: ["#ffffff", "#00ffff", "#ffffff"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-white text-lg cursor-pointer hover:text-[#00aaff] transition-colors duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móviles con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black/80 p-6 space-y-4 md:hidden"
          >
            {links.map((link, index) => (
              <a
                key={index}
                className="block text-white text-lg text-center cursor-pointer hover:text-[#00aaff] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
