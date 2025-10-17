import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Desarrolladora Web",
    content:
      "Esta plataforma cambió mi carrera profesional. Los cursos son de excelente calidad y los instructores realmente dominan sus temas. Ahora trabajo como desarrolladora full stack.",
    rating: 5,
    avatar: "MG",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Diseñador UX",
    content:
      "La flexibilidad de aprender a mi propio ritmo fue fundamental. Pude combinar mi trabajo actual mientras me capacitaba. Los proyectos prácticos son excelentes.",
    rating: 5,
    avatar: "CR",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Marketing Manager",
    content:
      "Los cursos de marketing digital superaron mis expectativas. El contenido está muy actualizado y los certificados me ayudaron a conseguir un ascenso en mi empresa.",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 4,
    name: "Luis Fernández",
    role: "Emprendedor",
    content:
      "Como emprendedor, necesitaba aprender múltiples habilidades rápidamente. Esta academia digital me dio todas las herramientas que necesitaba para lanzar mi startup.",
    rating: 5,
    avatar: "LF",
  },
  {
    id: 5,
    name: "Patricia Silva",
    role: "Diseñadora Gráfica",
    content:
      "La comunidad de estudiantes es increíble. He hecho conexiones valiosas y los foros de discusión me ayudaron a resolver todas mis dudas rápidamente.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 6,
    name: "Jorge Ramírez",
    role: "Data Analyst",
    content:
      "El material descargable y los proyectos reales me prepararon perfectamente para el mercado laboral. Conseguí trabajo antes de terminar el curso.",
    rating: 5,
    avatar: "JR",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            💬 Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              estudiantes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Miles de estudiantes han transformado sus carreras con nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
