import Image from "next/image";

import { Button } from "@/components/@shared/buttons/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-[5%] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-4 text-center md:text-left order-1 md:order-0 max-w-xl">
            <h1 className="font-bold text-primary text-3xl lg:text-5xl leading-[1.05] tracking-tighter">
              Perca peso, ganhe confiança e tenha a qualidade de vida que você
              tanto quer e precisa!
            </h1>

            <p className="md:text-xl">
              GF Ultra Slim oferece uma fórmula avançada que combina{" "}
              <strong>Inulina</strong> e <strong>L-Carnitina</strong> para
              acelerar seu metabolismo, reduzir o apetite e transformar seu
              corpo de forma natural e segura.
            </p>

            <div className="mt-4">
              <Button>Sim, quero começar a emagrecer!</Button>
            </div>

            <Image
              src="/images/hero/metodo-de-pagamento.png"
              alt="Métodos de Pagamento"
              width={300}
              height={60}
              loading="lazy"
              className="mx-auto md:mx-0 h-auto w-[300px]"
            />
          </div>

          {/* Right Content */}
          <Image
            src="/images/hero/hero-img.png"
            alt="GF Ultra Slim Bottles"
            width={640}
            height={640}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
