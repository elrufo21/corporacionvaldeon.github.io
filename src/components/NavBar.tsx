import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Phone,
} from "lucide-react"; // Más iconos

const navItems = [
  { name: "Inicio", icon: <Home size={20} /> },
  { name: "Servicios", icon: <Briefcase size={20} /> },
  { name: "Nosotros", icon: <Users size={20} /> },
  { name: "Contacto", icon: <MessageSquare size={20} /> },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Inicio");

  return (
    <>
      {/* NavBar Superior (visible en todas las pantallas) */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo animado */}
          <motion.div className="text-xl md:text-2xl font-bold flex flex-wrap">
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
                className="mx-0.5"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`text-white text-lg cursor-pointer hover:text-[#00aaff] transition-colors duration-300 ${
                  activeItem === item.name ? "text-[#00aaff]" : ""
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Botón de menú en tablets (solo visible en tamaño medio, no en móviles pequeños) */}
          <button
            className="hidden sm:block md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú desplegable en tablets */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-black/80 p-6 space-y-4 hidden sm:block md:hidden"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className={`flex items-center justify-center gap-2 text-white text-lg text-center cursor-pointer hover:text-[#00aaff] transition-colors duration-300 ${
                    activeItem === item.name ? "text-[#00aaff]" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Barra de navegación inferior para móviles */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 sm:hidden py-2 px-4 border-t border-gray-800"
      >
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                activeItem === item.name
                  ? "text-[#00aaff] bg-white/10"
                  : "text-gray-400"
              }`}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveItem(item.name)}
            >
              <motion.div
                animate={{
                  y: activeItem === item.name ? [-2, 0, -2] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: activeItem === item.name ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
              <span className="text-xs mt-1">{item.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
