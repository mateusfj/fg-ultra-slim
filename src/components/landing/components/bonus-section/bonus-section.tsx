import { BonusListCard } from "./components/bonus-list-card";

const BonusSection = () => {
  return (
    <section className="py-12 md:py-24 bg-linear-to-br from-[#2DD4A1] to-primary">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-accent text-3xl leading-[1.1] max-w-lg mx-auto mb-2">
            Peça MAIS de 3 Frascos e{" "}
            <span className="text-secondary">Ganhe Bônus Gratuitos!</span>
          </h2>
        </div>

        {/* Bonus Cards */}
        <BonusListCard />
      </div>
    </section>
  );
};

export { BonusSection };
