import { motion } from "framer-motion";
import VideoComponent from "./VideoComponent";
import {
  FaArrowRight,
  FaHeadphones,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full relative overflow-hidden py-12 md:py-20">
      {/* Elementos decorativos de fondo */}
      {/*<div className="absolute top-[-50%] right-[-10%] w-[70%] h-[140%] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-30%] left-[-5%] w-[50%] h-[100%] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div> */}

      {/* Contenido del banner */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative">
        {/* Contenedor de Video con efectos visuales */}
        <motion.div
          className="w-full md:w-[48%] flex justify-center md:justify-start relative mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Marco decorativo */}
          <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl transform rotate-3 scale-[1.03] blur-[1px] -z-10"></div>
          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl transform -rotate-2 scale-[1.05] blur-[2px] -z-10"></div>

          {/* Indicadores de tecnología */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-2 rounded-full shadow-lg z-10">
            <FaHeadphones size={18} />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-2 rounded-full shadow-lg z-10">
            <FaLightbulb size={18} />
          </div>

          {/* Video */}
          <div
            className="w-full rounded-xl shadow-2xl shadow-black/30 overflow-hidden relative z-0"
            style={{
              maxWidth: "520px",
              aspectRatio: "16/9",
              height: "auto",
            }}
          >
            <VideoComponent
              className="w-full h-full"
              width="100%"
              height="100%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Texto Descripción con animaciones */}
        <motion.div
          className="w-full md:w-[48%] text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm"
          >
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
              SOLUCIONES AUDIOVISUALES PROFESIONALES
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Corporación
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mt-1">
              Valdeón
            </span>
          </h1>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Somos una empresa peruana de profesionales que desarrolla proyectos
            corporativos y sociales en áreas como sonido, luces, efectos,
            pantallas LED, escenarios y grupos electrógenos.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="relative overflow-hidden group flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contáctanos</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </motion.a>

            <motion.a
              href="#servicios"
              className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full border border-gray-500 hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Servicios</span>
              <FaVideo />
            </motion.a>
          </div>

          {/* Indicadores de confianza */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400">
                <span className="text-sm font-bold">10+</span>
              </div>
              <span className="text-sm text-gray-400">Años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400">
                <span className="text-sm font-bold">100%</span>
              </div>
              <span className="text-sm text-gray-400">
                Satisfacción garantizada
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
