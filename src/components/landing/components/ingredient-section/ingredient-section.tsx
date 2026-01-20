import { Check } from "lucide-react";
import Image from "next/image";

const ingredients = [
  {
    title: "Cálcio + Quitosana",
    benefits: ["Combate Hipertensão", "Bloqueador de Gordura"],
    image: "/images/ingredients/product-100-natural.png",
  },
  {
    title: "Espirulina + Chia",
    benefits: ["Reduz Pressão Arterial", "Melhora Saúde Cardiovascular"],
    image: "/images/ingredients/product-100-natural.png",
  },
  {
    title: "Inulina + Psyllium",
    benefits: ["Reduz Triglicerídeos", "Promove a Saciedade"],
    image: "/images/ingredients/product-100-natural.png",
  },
  {
    title: "Zinco + L-Arginina",
    benefits: ["Fortalece Sistema Imune", "Aumenta Energia"],
    image: "/images/ingredients/product-100-natural.png",
  },
  {
    title: "L-Carnitina + L-Tirosina + Laranja Moro",
    benefits: ["Reduz Gordura Corporal", "Reduz a Fadiga"],
    image: "/images/ingredients/product-100-natural.png",
  },
  {
    title: "Cromo + Trans-Resveratrol",
    benefits: ["Reduz Colesterol Ruim (LDL)", "Efeito Antioxidante"],
    image: "/images/ingredients/product-100-natural.png",
  },
];

const IngredientCard = ({
  title,
  benefits,
  image,
  align = "left",
}: {
  title: string;
  benefits: string[];
  image: string;
  align?: "left" | "right";
}) => (
  <div
    className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}
  >
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary/30 mb-3 flex items-center justify-center shadow-lg overflow-hidden bg-white">
      <Image
        src={image}
        alt={title}
        width={96}
        height={96}
        className="w-full h-full object-cover"
      />
    </div>
    <h4 className="font-bold text-foreground text-sm md:text-base mb-2">
      {title}
    </h4>
    <ul className="space-y-1">
      {benefits.map((benefit, index) => (
        <li
          key={index}
          className={`flex items-center gap-2 text-xs md:text-sm text-muted-foreground ${align === "right" ? "flex-row-reverse" : ""}`}
        >
          <Check className="w-4 h-4 text-primary shrink-0" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

const IngredientsSection = () => {
  return (
    <section className="relative flex items-center pb-12 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter mb-4">
            Conheça a formulação do{" "}
            <span className="text-secondary">GF Ultra Slim!</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Tenha em suas mãos a eficácia de um suplemento{" "}
            <strong className="text-foreground">100% natural</strong>, feito
            para quem busca emagrecimento saudável sem sacrifícios.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {ingredients.slice(0, 3).map((ingredient, index) => (
              <IngredientCard key={index} {...ingredient} align="left" />
            ))}
          </div>

          {/* Center - Product */}
          <div className="relative flex justify-center items-center col-span-2">
            {/* Product Image */}
            <Image
              src={"/images/ingredients/product-100-natural.png"}
              alt="GF Ultra Slim - Suplemento Natural"
              width={480}
              height={480}
              className="relative z-10 "
            />
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {ingredients.slice(3, 6).map((ingredient, index) => (
              <IngredientCard key={index} {...ingredient} align="right" />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Product Center */}
          <div className="relative flex justify-center items-center mb-12">
            <Image
              src={"/images/ingredients/product-100-natural.png"}
              alt="GF Ultra Slim - Suplemento Natural"
              width={384}
              height={384}
              className="relative z-10 w-96 drop-shadow-2xl"
            />
          </div>

          {/* Grid of Ingredients */}
          <div className="grid grid-cols-2 gap-6">
            {ingredients.map((ingredient, index) => (
              <IngredientCard key={index} {...ingredient} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { IngredientsSection };
