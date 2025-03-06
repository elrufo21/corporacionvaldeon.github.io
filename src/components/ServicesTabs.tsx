import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
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
    icon: <FaMicrophone size={20} />,
    content:
      "Ofrecemos servicios de sonido profesional para conciertos, conferencias y eventos corporativos. Contamos con equipos de alta calidad para garantizar una experiencia de audio excepcional.",
  },
  {
    id: "led",
    title: "Pantallas LED",
    icon: <FaTv size={20} />,
    content:
      "Alquilamos pantallas LED de última tecnología con una resolución superior y colores vibrantes. Perfectas para captar la atención del público en cualquier evento.",
  },
  {
    id: "lights",
    title: "Luces y Efectos",
    icon: <FaLightbulb size={20} />,
    content:
      "Disponemos de cabezas móviles, blinder, láser, máquinas de humo y más. Diseñamos la iluminación ideal para que tu evento tenga un ambiente moderno y profesional.",
  },
  {
    id: "generator",
    title: "Generadores Eléctricos",
    icon: <FaBolt size={20} />,
    content:
      "Alquilamos generadores eléctricos de diferentes capacidades para garantizar que tu evento nunca se quede sin energía.",
  },
  {
    id: "stage",
    title: "Escenarios Profesionales",
    icon: <FaThLarge size={20} />,
    content:
      "Ofrecemos escenarios certificados y homologados, diseñados para garantizar la seguridad y calidad en eventos y espectáculos.",
  },
  {
    id: "recording",
    title: "Grabación con Cámaras y Drone",
    icon: <FaVideo size={20} />,
    content:
      "Brindamos servicios de grabación en 4K con cámaras y drones de última generación para capturar cada momento desde ángulos impresionantes.",
  },
];

const ServicesTabs = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-center text-white text-2xl font-semibold mb-4">
        Nuestros Servicios
      </h2>
      <Tabs defaultValue="sound" className="w-full">
        {/* Pestañas */}
        <TabsList className="flex flex-wrap justify-center gap-2 border-b border-gray-700 pb-2">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="flex items-center gap-1 px-3 py-1 rounded-md text-gray-400 text-sm hover:bg-gray-800 hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all"
            >
              {service.icon}{" "}
              <span className="hidden sm:inline">{service.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Contenido de cada pestaña */}
        <div className="w-full min-h-[120px] flex items-center justify-center mt-4 px-4">
          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="w-full text-center text-gray-300  overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="leading-tight"
              >
                {/* Título visible solo en móviles */}
                <h3 className="sm:hidden text-white text-base font-semibold mb-1">
                  {service.title}
                </h3>
                {service.content}
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ServicesTabs;
