import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Comienza tu viaje de aprendizaje hoy mismo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 50,000 estudiantes que ya están transformando sus
            carreras profesionales.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle size={24} />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle size={24} />
              <span>7 días de garantía</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle size={24} />
              <span>Certificados incluidos</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Registrarse Gratis
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Explorar Cursos
            </Button>
          </div>

          <p className="text-sm mt-6 opacity-75">
            No se requiere tarjeta de crédito • Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}
