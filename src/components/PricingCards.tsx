import { useState } from "react";
import {
  FaCheck,
  FaStar,
  FaCrown,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const plans = [
  {
    name: "Básico",
    icon: <FaStar className="text-yellow-300" size={24} />,
    price: "$1000",
    period: "por evento",
    description: "Ideal para eventos pequeños y reuniones privadas.",
    features: [
      "Sonido profesional",
      "Iluminación básica",
      "Soporte técnico",
      "1 técnico especializado",
    ],
    highlight: false,
    color: "from-blue-500 to-cyan-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Premium",
    icon: <FaCrown className="text-blue-300" size={24} />,
    price: "$3000",
    period: "por evento",
    description: "Perfecto para conferencias y eventos medianos.",
    features: [
      "Sonido e iluminación avanzada",
      "Pantalla LED HD",
      "Grabación de video HD",
      "2 técnicos especializados",
      "Transmisión en vivo",
    ],
    highlight: true,
    color: "from-indigo-600 to-blue-500",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600",
  },
  {
    name: "Empresarial",
    icon: <FaBuilding className="text-purple-300" size={24} />,
    price: "$5000",
    period: "por evento",
    description: "Para grandes eventos y espectáculos en vivo.",
    features: [
      "Sonido profesional de alta gama",
      "Iluminación premium",
      "Generadores eléctricos",
      "Cobertura con drones 4K",
      "3 técnicos especializados",
      "Edición de video completa",
    ],
    highlight: false,
    color: "from-purple-600 to-indigo-600",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];

const PricingCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Función para manejar la selección del plan
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    console.log("Plan seleccionado:", planName);
    alert(`Has seleccionado el plan: ${planName}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Nuestros Planes
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Soluciones adaptadas a tus necesidades. Desde pequeñas reuniones hasta
          grandes espectáculos.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col h-full bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl ${
              plan.highlight ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Fondo con gradiente */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                plan.color
              } opacity-10 ${hoveredIndex === index ? "opacity-20" : ""}`}
            ></div>

            {/* Borde brillante cuando es destacado */}
            {plan.highlight && (
              <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"></div>
            )}

            {/* Badge para el plan destacado */}
            {plan.highlight && (
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl shadow-lg">
                  MÁS POPULAR
                </div>
              </div>
            )}

            <div className="flex-grow p-6 md:p-8 relative z-10">
              {/* Encabezado del plan */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-700/50">
                  {plan.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {plan.name}
                </h3>
              </div>

              {/* Precio */}
              <div className="mt-4 mb-6">
                <div className="flex items-end">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2 pb-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
              </div>

              {/* Características */}
              <div className="mt-6 space-y-4">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Incluye
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span
                        className={`flex-shrink-0 rounded-full p-1 ${
                          plan.highlight ? "bg-indigo-500/20" : "bg-blue-500/20"
                        }`}
                      >
                        <FaCheck
                          className={`text-sm ${
                            plan.highlight ? "text-indigo-400" : "text-blue-400"
                          }`}
                        />
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón con correcciones */}
            <div className="p-6 md:p-8 pt-0 relative z-10">
              <button
                type="button"
                onClick={() => handleSelectPlan(plan.name)}
                className={`group w-full ${plan.buttonColor} text-white font-semibold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:shadow-xl active:scale-[0.98] focus:outline-none`}
              >
                <span>Elegir Plan</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <p className="text-center text-gray-500 text-xs mt-3">
                Sin contratos a largo plazo
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Adicional */}
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-4">
          ¿Necesitas una solución personalizada?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
        >
          Contáctanos para un presupuesto a medida
          <FaArrowRight className="group-hover:translate-x-1" />
        </a>
      </div>

      {/* Estado seleccionado (para demostrar que funciona) */}
      {selectedPlan && (
        <div className="mt-8 p-4 bg-green-500/20 text-green-300 rounded-lg text-center">
          Has seleccionado el plan: <strong>{selectedPlan}</strong>
        </div>
      )}
    </div>
  );
};

export default PricingCards;
