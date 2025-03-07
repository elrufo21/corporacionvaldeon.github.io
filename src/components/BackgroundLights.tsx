import { motion } from "framer-motion";

export default function BackgroundLights() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* Luz izquierda - Reposicionada para mejor visibilidad */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-[25vw] h-[25vw] max-w-60 max-h-60 opacity-40 blur-[90px] rounded-full"
        animate={{
          y: [0, 100, 0],
          x: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3],
          backgroundColor: ["#ff7eb3", "#ffbf69", "#ff7eb3"], // Rosa suave → Naranja pastel → Rosa
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz derecha - Posición ajustada */}
      <motion.div
        className="absolute top-[25%] right-[10%] w-[28vw] h-[28vw] max-w-72 max-h-72 opacity-50 blur-[100px] rounded-full"
        animate={{
          y: [0, 120, 0],
          x: [20, -20, 20],
          opacity: [0.3, 0.7, 0.3],
          backgroundColor: ["#6a77ff", "#a06aff", "#6a77ff"], // Azul suave → Lila → Azul
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz central - Más centrada verticalmente */}
      <motion.div
        className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] max-w-96 max-h-96 opacity-40 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          backgroundColor: ["#ffcc00", "#ff9900", "#ffcc00"], // Amarillo suave → Naranja dorado → Amarillo
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz inferior - Añadida para cubrir la parte baja */}
      <motion.div
        className="absolute bottom-[10%] left-[30%] w-[30vw] h-[30vw] max-w-80 max-h-80 opacity-40 blur-[100px] rounded-full"
        animate={{
          x: [-30, 30, -30],
          opacity: [0.2, 0.5, 0.2],
          backgroundColor: ["#00ffcc", "#4eff9b", "#00ffcc"], // Turquesa → Verde menta → Turquesa
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz superior - Mejora la parte alta */}
      <motion.div
        className="absolute top-[5%] left-[50%] transform -translate-x-1/2 w-[25vw] h-[25vw] max-w-64 max-h-64 opacity-30 blur-[90px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          backgroundColor: ["#ed72ff", "#ff59cc", "#ed72ff"], // Púrpura → Rosa → Púrpura
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
