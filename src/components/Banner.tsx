import VideoComponent from "./VideoComponent";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-8">
        {/* Video */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-start">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg scale-95 md:scale-100 transition-transform duration-300">
            <VideoComponent />
          </div>
        </div>

        {/* Texto Descripción */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Corporación Valdeón
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Somos una empresa peruana de profesionales que desarrolla proyectos
            corporativos y sociales en áreas como sonido, luces, efectos,
            pantallas LED, escenarios y grupos electrógenos.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
