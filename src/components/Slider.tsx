import { useState, useCallback, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
];

// Componente de imagen optimizado
const OptimizedImage = memo(
  ({
    src,
    current,
    index,
    loaded,
    onLoad,
  }: {
    src: string;
    current: number;
    index: number;
    loaded: boolean;
    onLoad: () => void;
  }) => {
    useEffect(() => {
      if (
        index === current ||
        index === (current + 1) % images.length ||
        index === (current - 1 + images.length) % images.length
      ) {
        const img = new Image();
        img.src = src;
        img.onload = onLoad;
      }
    }, [src, current, index, onLoad]);

    if (index !== current) return null;

    return (
      <>
        <img
          src={src}
          alt={`Slide ${index + 1}`}
          className="absolute w-full h-full object-cover"
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </>
    );
  }
);

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Memoiza las funciones de navegación
  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % images.length),
    []
  );

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + images.length) % images.length),
    []
  );

  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Cambio automático de diapositivas (opcional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Precarga inicial de la primera imagen
  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => handleImageLoad(0);
  }, [handleImageLoad]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slider Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((src, index) => (
              <OptimizedImage
                key={index}
                src={src}
                current={current}
                index={index}
                loaded={!!imagesLoaded[index as keyof typeof imagesLoaded]}
                onLoad={() => handleImageLoad(index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80 transition"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80 transition"
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
