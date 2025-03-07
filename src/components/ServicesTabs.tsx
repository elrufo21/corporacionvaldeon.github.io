import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMicrophone,
  FaTv,
  FaLightbulb,
  FaVideo,
  FaThLarge,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    id: "sound",
    title: "Sonido Profesional",
    icon: <FaMicrophone size={24} />,
    content:
      "Ofrecemos servicios de sonido profesional para conciertos, conferencias y eventos corporativos. Contamos con equipos de alta calidad para garantizar una experiencia de audio excepcional.",
    color: "from-blue-600 to-indigo-800",
    bgImage: "url('/img/services/sound-bg.jpg')",
  },
  {
    id: "led",
    title: "Pantallas LED",
    icon: <FaTv size={24} />,
    content:
      "Alquilamos pantallas LED de última tecnología con una resolución superior y colores vibrantes. Perfectas para captar la atención del público en cualquier evento.",
    color: "from-purple-600 to-indigo-800",
    bgImage: "url('/img/services/led-bg.jpg')",
  },
  {
    id: "lights",
    title: "Luces y Efectos",
    icon: <FaLightbulb size={24} />,
    content:
      "Disponemos de cabezas móviles, blinder, láser, máquinas de humo y más. Diseñamos la iluminación ideal para que tu evento tenga un ambiente moderno y profesional.",
    color: "from-yellow-500 to-orange-700",
    bgImage: "url('/img/services/lights-bg.jpg')",
  },
  {
    id: "generator",
    title: "Generadores Eléctricos",
    icon: <FaBolt size={24} />,
    content:
      "Alquilamos generadores eléctricos de diferentes capacidades para garantizar que tu evento nunca se quede sin energía.",
    color: "from-green-500 to-emerald-700",
    bgImage: "url('/img/services/generator-bg.jpg')",
  },
  {
    id: "stage",
    title: "Escenarios Profesionales",
    icon: <FaThLarge size={24} />,
    content:
      "Ofrecemos escenarios certificados y homologados, diseñados para garantizar la seguridad y calidad en eventos y espectáculos.",
    color: "from-red-500 to-rose-700",
    bgImage: "url('/img/services/stage-bg.jpg')",
  },
  {
    id: "recording",
    title: "Grabación con Cámaras y Drone",
    icon: <FaVideo size={24} />,
    content:
      "Brindamos servicios de grabación en 4K con cámaras y drones de última generación para capturar cada momento desde ángulos impresionantes.",
    color: "from-blue-400 to-cyan-600",
    bgImage: "url('/img/services/recording-bg.jpg')",
  },
];

// Precarga de imágenes para evitar parpadeos
const preloadImages = () => {
  services.forEach((service) => {
    if (service.bgImage && service.bgImage !== "none") {
      const img = new Image();
      img.src = service.bgImage.replace(/url\(['"](.+)['"]\)/, "$1");
    }
  });
};

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("sound");
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Controlar la animación para evitar superposiciones
  const handleTabChange = (value: string) => {
    if (!isAnimating && value !== activeTab) {
      setIsAnimating(true);
      setActiveTab(value);
      // Dar tiempo suficiente para que la animación termine
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  // Precargar imágenes al montar el componente
  useEffect(() => {
    preloadImages();

    // Listener para responsive
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determinar si estamos en móvil
  const isMobile = windowWidth < 640;

  return (
    <section className="w-full py-16">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white text-3xl font-bold mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Nuestros Servicios
          </span>
        </motion.h2>

        <Tabs
          defaultValue="sound"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* Tabs responsivas - siempre en fila excepto en móvil */}
          <TabsList
            className={`
            ${isMobile ? "grid grid-cols-3" : "flex flex-wrap justify-center"} 
            gap-2 mb-10 max-w-4xl mx-auto px-2
          `}
          >
            {services.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  disabled={isAnimating}
                  className={`
                    ${
                      isMobile
                        ? "flex flex-col items-center text-center px-2 py-3"
                        : "flex items-center gap-2 px-4 py-3"
                    }
                    rounded-lg backdrop-blur-sm transition-all duration-300
                    ${
                      isActive
                        ? `bg-gradient-to-r ${service.color} shadow-lg shadow-black/30 scale-105`
                        : "bg-gray-800/40 hover:bg-gray-700/40"
                    }
                  `}
                >
                  <motion.div
                    animate={{ rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {service.icon}
                  </motion.div>
                  <span
                    className={`${
                      isMobile ? "text-xs mt-1" : "hidden sm:inline text-sm"
                    } font-medium ${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {isMobile ? service.title.split(" ")[0] : service.title}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Contenedor con altura absolutamente fija */}
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-gray-800/50 shadow-2xl shadow-black/30"
            style={{
              height: isMobile ? "400px" : "320px",
            }}
          >
            {/* Fondo con animación mejorada */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage:
                  services.find((s) => s.id === activeTab)?.bgImage || "none",
                opacity: 0.15,
                filter: "blur(4px)",
              }}
            />

            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90" />

            {/* Contenido con altura fija y overflow-y auto para scrollear si es necesario */}
            <div className="relative w-full h-full overflow-y-auto">
              <AnimatePresence mode="sync" initial={false}>
                {services.map(
                  (service) =>
                    service.id === activeTab && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        className="flex flex-col items-center text-center p-8 absolute inset-0 w-full"
                      >
                        <div
                          className={`mb-6 p-4 rounded-full bg-gradient-to-r ${service.color} shadow-xl`}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="text-white"
                          >
                            {service.icon}
                          </motion.div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {service.title}
                        </h3>

                        <p className="text-gray-100 max-w-2xl text-base sm:text-lg leading-relaxed">
                          {service.content}
                        </p>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`mt-6 px-6 py-2 rounded-full bg-gradient-to-r ${service.color} 
                          text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          Más información
                        </motion.button>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabs;
