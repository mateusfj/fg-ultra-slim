import { Button } from "@/components/@shared/buttons/button";

export const CompositionSection = () => {
  return (
    <section
      className="relative min-h-[60vh] py-12 md:py-24"
      style={{
        backgroundImage: "url(/images/about-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-[5%] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative items-center">
          <img
            src="/images/mao-2.png"
            alt="Problem Illustration"
            className="order-1 lg:order-0 absolute  max-w-md w-full hidden lg:block"
          />
          <img
            src="/images/mao-2.png"
            alt="Problem Illustration"
            className="order-1 lg:order-0 w-full max-w-sm block lg:hidden -mb-24 mx-auto"
          />
          <div></div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-primary text-3xl leading-[1.1] tracking-tighter">
              Com GF Ultra Slim, a perda de peso se torna uma realidade ao seu
              alcance.
            </h2>

            <p className="text-lg md:text-xl text-accent">
              Se você não consegue lembrar, então é hora de conhecer FegMonjar
            </p>

            <p className="text-lg md:text-xl mb-6 text-accent">
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
