export type Solution = {
  image: string;
  text: string;
  highlight: string;
  suffix: string;
};

export type SolutionCardProps = {
  solution: Solution;
};

const SolutionCard = ({ solution }: SolutionCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 mb-4 shadow-lg">
        <img
          src={solution.image}
          alt={solution.highlight}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <p className="text-xs text-foreground/80 leading-relaxed">
        {solution.text}{" "}
        <span className="text-primary font-semibold decoration-primary/50">
          {solution.highlight}
        </span>{" "}
        {solution.suffix}
      </p>
    </div>
  );
};

export { SolutionCard };
