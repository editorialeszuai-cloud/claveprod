import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white">A</span>
            </div>
            <span className="text-xl">Academia Digital</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Inicio
            </a>
            <a href="#cursos" className="text-gray-600 hover:text-gray-900 transition-colors">
              Cursos
            </a>
            <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900 transition-colors">
              Características
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonios
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Registrarse Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#cursos"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </a>
              <a
                href="#caracteristicas"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#testimonios"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Registrarse Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
