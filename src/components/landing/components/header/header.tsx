const Header = () => {
  return (
    <header
      className="bg-linear-to-r from-[#2DD4A1] to-primary p-3.5 md:p-2.5 flex items-center justify-center text-center gap-2"
      aria-label="Aviso de promoção de emagrecimento com descontos especiais"
    >
      <p className="text-sm md:text-base font-medium text-accent">
        <strong>Nunca foi tão barato emagrecer.</strong> Aproveite nossos super
        descontos nas compras acima de 2 potes!
      </p>
    </header>
  );
};

export { Header };
