import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQ = {
  question: string;
  answer: string;
};

export type FAQCardProps = {
  faq: FAQ;
  index: number;
};

const FAQCard = ({ faq, index }: FAQCardProps) => {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-card border border-border rounded-md px-6"
    >
      <AccordionTrigger className="text-lg md:text-xl cursor-pointer text-left font-semibold hover:text-primary transition-colors py-5">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export { FAQCard };
