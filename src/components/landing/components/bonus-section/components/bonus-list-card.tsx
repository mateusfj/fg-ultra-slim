import { Bonus, BonusCard } from "./bonus-card";

const bonuses: Bonus[] = [
  {
    image: "/images/bonuses/anti-flacidez.png",
    title: "Método Anti Flacidez",
    originalPrice: "R$147,95",
    description:
      "Com este guia direto ao ponto você encontrará estratégias para se livrar da flacidez após o seu emagrecimento.",
  },
  {
    image: "/images/bonuses/cardapio-completo.png",
    title: "Cardápio Completo",
    originalPrice: "R$110,95",
    description:
      "Receba este e-book completo e gratuito contendo diversas receitas saudáveis e deliciosas que irão auxiliar na sua jornada de queima de gordura",
  },
  {
    image: "/images/bonuses/diga-adeus-a-celulite.png",
    title: "Diga Adeus à Celulite",
    originalPrice: "R$79,10",
    description:
      "Com esse material completo você aprenderá dicas para dar adeus à celulite",
  },
];

const BonusListCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {bonuses.map((bonus, index) => (
        <BonusCard key={index} bonus={bonus} />
      ))}
    </div>
  );
};

export { BonusListCard };
