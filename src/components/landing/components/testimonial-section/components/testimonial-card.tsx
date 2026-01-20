import { Star } from "lucide-react";
import Image from "next/image";

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  weight: string;
  image: string;
};

export type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border h-full">
      {/* Before/After Image */}
      <div className="relative">
        <Image
          src={testimonial.image}
          alt={`Transformação de ${testimonial.name}`}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
        {/* Weight Loss Badge */}
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {testimonial.weight}
        </div>
        {/* Before/After Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex">
          <div className="flex-1 bg-black/60 text-accent text-center py-1 text-xs font-semibold">
            ANTES
          </div>
          <div className="flex-1 bg-primary/90 text-accent text-center py-1 text-xs font-semibold">
            DEPOIS
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-foreground text-sm mb-4 italic line-clamp-3">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
