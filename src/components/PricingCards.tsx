import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Básico",
    price: "$1000",
    description: "Ideal para eventos pequeños y reuniones privadas.",
    features: ["Sonido profesional", "Iluminación básica", "Soporte técnico"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$3000",
    description: "Perfecto para conferencias y eventos medianos.",
    features: [
      "Sonido e iluminación avanzada",
      "Pantalla LED HD",
      "Grabación de video",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "$5000",
    description: "Para grandes eventos y espectáculos en vivo.",
    features: [
      "Sonido profesional de alta gama",
      "Iluminación premium",
      "Generadores eléctricos",
      "Cobertura con drones",
    ],
    highlight: false,
  },
];

const PricingCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-center text-white text-3xl font-bold mb-8">
        Nuestros Planes
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative flex flex-col justify-between bg-gray-800 text-white rounded-2xl shadow-lg p-6 border-2 ${
              plan.highlight
                ? "border-blue-500 scale-105"
                : "border-gray-700 hover:border-blue-500"
            } transition-all`}
          >
            {plan.highlight && (
              <span className="absolute top-2 right-2 bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                Más Popular
              </span>
            )}
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold mt-2">{plan.price}</p>
              <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all">
              Elegir Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
