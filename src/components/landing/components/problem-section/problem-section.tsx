import Image from "next/image";

import { Button } from "@/components/@shared/buttons/button";

export const ProblemSection = () => {
  return (
    <section className="min-h-[700px] py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-[5%] w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative items-center">
          <Image
            src="/images/foto_1.png"
            alt="Pessoa preocupada com o próprio corpo diante do espelho"
            width={480}
            height={480}
            className="order-1 lg:order-0 absolute top-4 max-w-md w-full h-auto hidden lg:block"
          />
          <Image
            src="/images/foto_1.png"
            alt="Pessoa preocupada com o próprio corpo diante do espelho"
            width={360}
            height={360}
            className="order-1 lg:order-0 w-full max-w-sm h-auto block lg:hidden -mb-12 md:-mb-24 mx-auto"
          />
          <div></div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter">
              Quando foi a<span className="text-secondary"> última vez</span>{" "}
              que você <span className="text-secondary">se sentiu bem</span> com
              o seu reflexo <span className="text-secondary">no espelho?</span>
            </h2>

            <p className="text-lg md:text-xl">
              Se você não consegue lembrar, então é hora de conhecer GF Ultra
              Slim.
            </p>

            <p className="text-lg md:text-xl mb-6">
              Melhore sua relação com seu corpo e alcance o bem-estar com um
              suplemento desenhado para ajudar a perder peso de forma natural e
              saudável, aumentando sua autoestima e renovando seu amor próprio
              todos os dias.
            </p>
            <Button>QUERO CONHECER O GF Ultra SLIM</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
