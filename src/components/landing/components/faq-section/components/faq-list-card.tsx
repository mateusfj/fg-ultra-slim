import { Accordion } from "@/components/ui/accordion";

import { FAQ, FAQCard } from "./faq-card";

const faqs: FAQ[] = [
  {
    question: "GF Ultra Slim é seguro para consumo?",
    answer:
      "Sim! GF Ultra Slim é 100% natural, produzido com ingredientes de alta qualidade e aprovado pela ANVISA. Nossa fórmula não contém substâncias nocivas, estimulantes artificiais ou componentes que causem dependência. Milhares de pessoas já utilizam o produto com total segurança.",
  },
  {
    question: "Em quanto tempo vou ver os resultados?",
    answer:
      "Os primeiros resultados costumam aparecer entre 2 a 4 semanas de uso contínuo. No entanto, para resultados mais expressivos e duradouros, recomendamos o uso por pelo menos 3 meses. Cada organismo reage de forma diferente, mas a maioria dos nossos clientes relata melhoras significativas já no primeiro mês.",
  },
  {
    question: "Como devo tomar o GF Ultra Slim?",
    answer:
      "Tome 2 cápsulas por dia, preferencialmente antes das principais refeições (almoço e jantar), com um copo de água. Para melhores resultados, mantenha uma alimentação equilibrada e pratique atividades físicas regularmente.",
  },
  {
    question: "Posso tomar se tiver alguma condição de saúde?",
    answer:
      "GF Ultra Slim é formulado com ingredientes naturais e seguros. No entanto, se você possui alguma condição de saúde específica, está grávida, amamentando ou toma medicamentos contínuos, recomendamos consultar seu médico antes de iniciar o uso.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito com o produto, basta entrar em contato conosco dentro desse período e devolveremos 100% do seu dinheiro, sem perguntas. Seu investimento está totalmente protegido.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Após a confirmação do pagamento, seu pedido é despachado em até 24 horas úteis. O prazo de entrega varia de acordo com sua região, geralmente entre 5 a 15 dias úteis. Você receberá o código de rastreamento por e-mail para acompanhar sua encomenda.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos todas as principais formas de pagamento: cartão de crédito (parcelado em até 12x), PIX (com desconto especial), boleto bancário e carteiras digitais. Todas as transações são 100% seguras e criptografadas.",
  },
  {
    question: "GF Ultra Slim tem contraindicações?",
    answer:
      "GF Ultra Slim é contraindicado para menores de 18 anos, gestantes e lactantes. Pessoas com doenças crônicas ou que fazem uso de medicamentos controlados devem consultar um médico antes do uso. Não exceda a dose recomendada.",
  },
];

const FAQListCard = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQCard key={index} faq={faq} index={index} />
      ))}
    </Accordion>
  );
};

export { FAQListCard };
