import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaIdCard,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Corporación Valdeón
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Soluciones profesionales en sonido, iluminación y tecnología
              audiovisual para todo tipo de eventos.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Gerencia
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">
                  <FaIdCard />
                </span>
                <div>
                  <p className="text-white">Ing. Luis Olimpo Baldeon Ricra</p>
                  <p className="text-gray-400">CIP: 339514</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+51958048855"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <span className="text-blue-400 mr-2">
                    <FaPhone />
                  </span>
                  <span>958 048 855</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:luishuancayo@gmail.com"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <span className="text-blue-400 mr-2">
                    <FaEnvelope />
                  </span>
                  <span>luishuancayo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Oficina
            </h3>
            <div className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">
                <FaMapMarkerAlt />
              </span>
              <p className="text-gray-300">
                Jr. Santa Rosa 333
                <br />
                El Tambo - Huancayo
                <br />
                Perú
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Jr. Santa Rosa 333, El Tambo, Huancayo, Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Enlaces rápidos y redes sociales */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Síguenos
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-200">
              Navegación
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cotización
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Corporación Valdeón - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
