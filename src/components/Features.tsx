import {
  BookOpen,
  Clock,
  Award,
  Users,
  Video,
  Download,
} from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Contenido de Calidad",
    description:
      "Cursos creados por expertos de la industria con contenido actualizado y relevante.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "Aprende a tu Ritmo",
    description:
      "Acceso 24/7 a todo el contenido. Aprende cuando y donde quieras.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    title: "Certificados Oficiales",
    description:
      "Obtén certificados verificables al completar cada curso exitosamente.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description:
      "Únete a miles de estudiantes y comparte conocimientos en nuestra comunidad.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Video,
    title: "Clases en Video HD",
    description:
      "Videos de alta calidad con subtítulos y recursos descargables.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Download,
    title: "Material Descargable",
    description:
      "Descarga recursos, plantillas y archivos para practicar offline.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            ✨ Características
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              aprender online
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Nuestra plataforma está diseñada para brindarte la mejor experiencia
            de aprendizaje digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
