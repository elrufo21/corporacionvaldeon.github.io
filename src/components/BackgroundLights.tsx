import { motion } from "framer-motion";

export default function BackgroundLights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Luz izquierda */}
      <motion.div
        className="absolute top-0 left-[10%] w-[20vw] h-[20vw] max-w-48 max-h-48 opacity-40 blur-[80px] rounded-full"
        animate={{
          y: [0, 100, 0],
          x: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3],
          backgroundColor: ["#ff7eb3", "#ffbf69", "#ff7eb3"], // Rosa suave → Naranja pastel → Rosa
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz derecha */}
      <motion.div
        className="absolute top-0 right-[10%] w-[22vw] h-[22vw] max-w-56 max-h-56 opacity-40 blur-[80px] rounded-full"
        animate={{
          y: [0, 120, 0],
          x: [20, -20, 20],
          opacity: [0.3, 0.6, 0.3],
          backgroundColor: ["#6a77ff", "#a06aff", "#6a77ff"], // Azul suave → Lila → Azul
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz central (más grande en pantallas grandes) */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-[25vw] h-[25vw] max-w-64 max-h-64 opacity-30 blur-[100px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          backgroundColor: ["#ffcc00", "#ff9900", "#ffcc00"], // Amarillo suave → Naranja dorado → Amarillo
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
