export type Bonus = {
  image: string;
  title: string;
  originalPrice: string;
  description: string;
};

export type BonusCardProps = {
  bonus: Bonus;
};

const BonusCard = ({ bonus }: BonusCardProps) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="rounded-md overflow-hidden mb-4">
        <img
          src={bonus.image}
          alt={bonus.title}
          className="w-full h-auto object-cover aspect-square"
        />
      </div>

      {/* Price Info */}
      <div className="text-accent">
        <p className="text-sm text-accent/70 mb-1">
          Preço normal:{" "}
          <span className="line-through text-red-700">
            {bonus.originalPrice}
          </span>
        </p>
        <p className="text-xl font-bold mb-3">
          HOJE: <span className="text-secondary">GRÁTIS</span>
        </p>
        <p className="text-sm text-accent/80 leading-relaxed">
          {bonus.description}
        </p>
      </div>
    </div>
  );
};

export { BonusCard };
