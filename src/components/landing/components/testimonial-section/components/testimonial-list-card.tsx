"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";

import { Testimonial, TestimonialCard } from "./testimonial-card";

const testimonials: Testimonial[] = [
  {
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    text: "Já perdi 8kg em apenas 2 meses! O GF Ultra Slim realmente controla minha fome e me dá mais energia para o dia a dia.",
    rating: 5,
    weight: "-8kg",
    image: "/images/testimonials/image-1.png",
  },
  {
    name: "Carla Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Tentei várias dietas antes, mas com o GF Ultra Slim finalmente consegui resultados. Me sinto mais confiante e feliz!",
    rating: 5,
    weight: "-12kg",
    image: "/images/testimonials/image-2.png",
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    text: "O melhor suplemento que já usei. Natural, sem efeitos colaterais e funciona de verdade. Recomendo a todas!",
    rating: 5,
    weight: "-6kg",
    image: "/images/testimonials/image-3.png",
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    text: "Em 3 meses perdi 15kg! Minha autoestima voltou e agora uso as roupas que sempre sonhei.",
    rating: 5,
    weight: "-15kg",
    image: "/images/testimonials/image-4.png",
  },
  {
    name: "Mariana Oliveira",
    location: "Salvador, BA",
    text: "Comecei desconfiada, mas os resultados falam por si. Perdi 10kg e ganhei muita disposição!",
    rating: 5,
    weight: "-10kg",
    image: "/images/testimonials/image-5.png",
  },
  {
    name: "Carla Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Tentei várias dietas antes, mas com o GF Ultra Slim finalmente consegui resultados. Me sinto mais confiante e feliz!",
    rating: 5,
    weight: "-12kg",
    image: "/images/testimonials/image-2.png",
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    text: "O melhor suplemento que já usei. Natural, sem efeitos colaterais e funciona de verdade. Recomendo a todas!",
    rating: 5,
    weight: "-6kg",
    image: "/images/testimonials/image-3.png",
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    text: "Em 3 meses perdi 15kg! Minha autoestima voltou e agora uso as roupas que sempre sonhei.",
    rating: 5,
    weight: "-15kg",
    image: "/images/testimonials/image-4.png",
  },
  {
    name: "Mariana Oliveira",
    location: "Salvador, BA",
    text: "Comecei desconfiada, mas os resultados falam por si. Perdi 10kg e ganhei muita disposição!",
    rating: 5,
    weight: "-10kg",
    image: "/images/testimonials/image-5.png",
  },
];

const TestimonialListCard = () => {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation
        className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
        classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
        alwaysShow
      />
    </Carousel>
  );
};

export { TestimonialListCard };
