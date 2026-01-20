import dynamic from "next/dynamic";

import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero-section/hero-section";
import { IngredientsSection } from "./components/ingredient-section/ingredient-section";
import { OfferSection } from "./components/offer-section/offer-section";
import { ProblemSection } from "./components/problem-section/problem-section";
import { SolutionSection } from "./components/solution-section/solution-section";
import { TrustBar } from "./components/trust-bar/trust-bar";

const TestimonialsSection = dynamic(() =>
  import("./components/testimonial-section/testmonial-section").then(
    (m) => m.TestimonialsSection,
  ),
);

const BonusSection = dynamic(() =>
  import("./components/bonus-section/bonus-section").then(
    (m) => m.BonusSection,
  ),
);

const GuaranteeSection = dynamic(() =>
  import("./components/guarantee-section/guarantee-section").then(
    (m) => m.GuaranteeSection,
  ),
);

const FAQSection = dynamic(() =>
  import("./components/faq-section/faq-section").then((m) => m.FAQSection),
);

export const LandingIndPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <IngredientsSection />
        <BonusSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};
