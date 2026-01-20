import { Button } from "@/components/@shared/buttons/button";
import Image from "next/image";

export type OfferPlan = {
  name: string;
  bottles: string;
  originalPrice: string;
  total: string;
  installment12x: string;
  pricePerDay?: string;
  highlight?: boolean;
  tag?: string;
  image: string;
  benefits: string[];
};

const OfferCard = ({ plan }: { plan: OfferPlan }) => {
  return (
    <article
      className={`flex flex-col h-full rounded-md border bg-card text-card-foreground p-6 md:p-7  text-center ${
        plan.highlight
          ? "scale-[1.02] md:scale-[1.04] border-2 border-secondary bg-primary/10 shadow-lg"
          : "border-border bg-card"
      }`}
      aria-label={plan.name}
    >
      {/* Imagem do kit */}
      <div className="mb-4 flex justify-center">
        <Image
          src={plan.image}
          alt={plan.name}
          width={256}
          height={128}
          className="w-auto h-32 object-contain drop-shadow-md -mt-14"
        />
      </div>

      <span className="inline-flex self-center mb-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {plan.bottles}
      </span>

      <h3 className="text-lg md:text-xl font-bold mb-1 text-foreground">
        {plan.name}
      </h3>

      <div className="mb-6">
        <p className="text-md font-semibold uppercase line-through mb-2 text-red-500">
          DE: {plan.originalPrice}
        </p>

        <p className="uppercase text-foreground mb-2"> Por 12X de </p>
        <p className="text-5xl font-extrabold text-primary">
          {plan.installment12x}
        </p>
        <p className="text-sm text-foreground mt-2">
          ou <span className="font-semibold">R$ {plan.total} À vista</span>
        </p>
      </div>
      <ul className="mb-6 mt-4 space-y-2 text-sm text-left">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <Button>Comprar agora</Button>
    </article>
  );
};

export { OfferCard };
