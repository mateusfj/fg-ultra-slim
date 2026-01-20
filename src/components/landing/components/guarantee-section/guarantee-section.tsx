const GuaranteeSection = () => {
  return (
    <section className="relative flex items-center py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-[5%] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              100% de satisfação com a Garantia de 30 dias,{" "}
              <span className="text-primary">
                tenha resultados ou não pague
              </span>
            </h2>

            <p className="text-lg md:text-xl mb-4">
              Seu pedido de hoje está protegido por nossa garantia de reembolso
              de 30 dias.
            </p>

            <p className="text-lg md:text-xl">
              Se em 30 dias você não ficar surpreso com os benefícios do{" "}
              <strong className="text-foreground">GF Ultra Slim</strong>, a
              qualquer momento nos próximos 30 dias, informe-nos e
              reembolsaremos cada centavo do seu investimento. Sem perguntas.
            </p>
          </div>

          {/* Product Image with Guarantee Badge */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={"/images/guarantee-img.png"}
              alt="GF Ultra Slim com garantia de 30 dias"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { GuaranteeSection };
