import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courses = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    description:
      "Aprende a crear aplicaciones web completas desde cero con HTML, CSS, JavaScript, React y Node.js.",
    image:
      "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzYwNjE3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Programación",
    level: "Intermedio",
    rating: 4.8,
    students: 12500,
    duration: "40 horas",
    price: "$89",
  },
  {
    id: 2,
    title: "Diseño UX/UI Profesional",
    description:
      "Domina los principios del diseño de experiencia de usuario y interfaces con Figma y Adobe XD.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDYyMjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Diseño",
    level: "Principiante",
    rating: 4.9,
    students: 8900,
    duration: "30 horas",
    price: "$79",
  },
  {
    id: 3,
    title: "Marketing Digital Avanzado",
    description:
      "Estrategias de marketing digital, SEO, SEM, redes sociales y analítica web para impulsar tu negocio.",
    image:
      "https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMHRlYW13b3JrfGVufDF8fHx8MTc2MDcyMTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Marketing",
    level: "Avanzado",
    rating: 4.7,
    students: 15200,
    duration: "35 horas",
    price: "$99",
  },
];

export function Courses() {
  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            📚 Cursos Populares
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Explora nuestros{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              cursos más demandados
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Aprende de los mejores instructores en las áreas más solicitadas del
            mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 hover:bg-white">
                  {course.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{course.level}</Badge>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl">{course.price}</div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Inscribirse
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Ver Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  );
}
