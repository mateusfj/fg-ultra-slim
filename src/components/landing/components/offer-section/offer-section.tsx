import { OfferCard, OfferPlan } from "./components/offer-card";

const PLANS: OfferPlan[] = [
  {
    name: "Kit Iniciante",
    bottles: "1 frasco",
    originalPrice: "R$ 199,90",
    total: "R$ 187,00",
    installment12x: "R$ 15,58",
    pricePerDay: "Menos de R$ 6,23 por dia",
    image: "/images/offer/kit-iniciante.png",
    tag: "Duração de 30 dias",
    benefits: ["Acesso ao GF Ultra Slim", "Garantia incondicional de 30 dias"],
  },
  {
    name: "Kit Mais Vendido",
    bottles: "3 frascos",
    originalPrice: "R$ 597,00",
    total: "R$ 297,00",
    installment12x: "R$ 24,75",
    pricePerDay: "Menos de R$ 3,30 por dia",
    highlight: true,
    image: "/images/offer/kit-mais-vendido.png",
    tag: "Duração de 90 dias",
    benefits: [
      "Acesso ao GF Ultra Slim",
      "2 E-books exclusivos",
      "Plano alimentar estratégico",
      "Garantia incondicional de 30 dias",
    ],
  },
  {
    name: "Kit Resultados Máximos",
    bottles: "5 frascos",
    originalPrice: "R$ 995,00",
    total: "R$ 457,00",
    installment12x: "R$ 38,08",
    pricePerDay: "Menos de R$ 3,05 por dia",
    image: "/images/offer/kit-resultados-maximos.png",
    tag: "Duração de 150 dias",
    benefits: [
      "Acesso ao GF Ultra Slim",
      "3 E-books exclusivos",
      "Plano alimentar estratégico",
      "Suporte prioritário",
      "Garantia incondicional de 30 dias",
    ],
  },
];

const OfferSection = () => {
  return (
    <section id="offer-section" className="py-12 md:py-24 bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-20 md:mb-20 max-w-2xl mx-auto">
          <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter mb-4">
            Escolha o kit ideal de{" "}
            <span className="text-secondary">GF Ultra Slim</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Aproveite os descontos progressivos, garanta os bônus exclusivos a
            partir de 3 frascos e conte com a garantia incondicional de 30 dias.
          </p>
        </div>
        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-20 md:gap-6 lg:gap-8">
          {PLANS.map((plan) => (
            <OfferCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { OfferSection };
