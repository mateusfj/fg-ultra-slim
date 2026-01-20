const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="max-w-[1200px] mx-auto px-[5%] py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground">
        <p className="text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-foreground">GF Ultra Slim</span>.
          Todos os direitos reservados.
        </p>

        <nav
          className="flex flex-wrap items-center justify-center md:justify-end gap-4"
          aria-label="Links institucionais do site GF Ultra Slim"
        >
          <a href="#" className="hover:text-primary transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Suporte
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
