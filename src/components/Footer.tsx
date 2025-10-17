import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">A</span>
              </div>
              <span className="text-xl text-white">Academia Digital</span>
            </div>
            <p className="mb-6 text-gray-400">
              Tu plataforma de aprendizaje online para alcanzar tus metas
              profesionales. Cursos de calidad, instructores expertos y
              certificaciones reconocidas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="text-white mb-4">Cursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Programación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diseño
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Negocios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Desarrollo Personal
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Conviértete en Instructor
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Prensa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Academia Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
