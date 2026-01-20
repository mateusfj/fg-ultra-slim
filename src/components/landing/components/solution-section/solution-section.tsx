import { Button } from "@/components/@shared/buttons/button";
import { SolutionListCard } from "./components/solution-list-card";

const SolutionSection = () => {
  return (
    <section className="py-6 md:py-12 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter text-center mb-12 max-w-md mx-auto">
          O <span className="text-secondary">GF ULTRA SLIM</span> é a solução
          perfeita para você que...
        </h2>

        {/* Solutions Grid */}
        <SolutionListCard />

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button>O GF ULTRA SLIM É PERFEITO PARA MIM!</Button>
        </div>
      </div>
    </section>
  );
};

export { SolutionSection };
