import { FAQListCard } from "./components/faq-list-card";

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o GF ULTRA SLIM
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <FAQListCard />
        </div>
      </div>
    </section>
  );
};

export { FAQSection };
