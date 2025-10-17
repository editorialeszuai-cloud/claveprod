import { Button } from "./ui/button";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              🎓 Aprende a tu propio ritmo
            </div>
            
            <h1 className="text-5xl md:text-6xl">
              Transforma tu futuro con{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                educación digital
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              Accede a más de 500+ cursos online de alta calidad. Aprende
              programación, diseño, marketing y más con instructores expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play size={20} />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-gray-600">Cursos</div>
              </div>
              <div>
                <div className="text-3xl">50K+</div>
                <div className="text-gray-600">Estudiantes</div>
              </div>
              <div>
                <div className="text-3xl">4.9/5</div>
                <div className="text-gray-600">Valoración</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613151096599-b234757eb4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYwNjI5MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estudiante aprendiendo online"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="text-gray-600">Certificación</div>
                  <div>Incluida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
