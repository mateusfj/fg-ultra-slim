import { Solution, SolutionCard } from "./solution-card";

const solutions: Solution[] = [
  {
    image: "/images/solution/image-1.png",
    text: "Deseja emagrecer",
    highlight: "sem recorrer a dietas extremas",
    suffix: "ou exercícios exaustivos.",
  },
  {
    image: "/images/solution/image-2.png",
    text: "Busca um",
    highlight: "método natural e seguro",
    suffix: "para perder peso, sem efeitos colaterais.",
  },
  {
    image: "/images/solution/image-3.png",
    text: "Luta contra a compulsão alimentar e procura uma forma eficaz de",
    highlight: "controlar o apetite.",
    suffix: "",
  },
  {
    image: "/images/solution/image-4.png",
    text: "Quer",
    highlight: "aumentar seu metabolismo de forma saudável,",
    suffix: "mesmo enquanto está em repouso.",
  },
  {
    image: "/images/solution/image-5.png",
    text: "Precisa de uma",
    highlight: "solução prática",
    suffix: "que se encaixe na sua rotina agitada.",
  },
  {
    image: "/images/solution/image-6.png",
    text: "Está cansado(a) de produtos que",
    highlight: "prometem muito, mas entregam pouco.",
    suffix: "",
  },
  {
    image: "/images/solution/image-7.png",
    text: "Valoriza um produto com",
    highlight: "ingredientes de alta qualidade",
    suffix: "e comprovadamente eficazes.",
  },
  {
    image: "/images/solution/image-8.png",
    text: "Quer ver",
    highlight: "resultados rápidos e duradouros",
    suffix: "que também melhorem sua saúde geral.",
  },
];

const SolutionListCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
      {solutions.map((solution, index) => (
        <SolutionCard key={index} solution={solution} />
      ))}
    </div>
  );
};

export { SolutionListCard };
