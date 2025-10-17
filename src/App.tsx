import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
