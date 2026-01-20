import { Button } from "@/components/@shared/buttons/button";
import { TestimonialListCard } from "./components/testimonial-list-card";

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter mb-4">
            Resultados Reais de{" "}
            <span className="text-secondary">Quem Usou</span>
          </h2>
          <p className="text-lg md:text-xl">
            Veja as transformações incríveis das nossas clientes
          </p>
        </div>

        <TestimonialListCard />

        {/* CTA */}
        <div className="text-center mt-20">
          <Button>QUERO TER RESULTADOS ASSIM TAMBÉM!</Button>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
