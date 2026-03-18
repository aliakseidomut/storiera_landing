import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { t } = useLanguage();

  const faqs = [
    { q: "faq.1.q", a: "faq.1.a" },
    { q: "faq.2.q", a: "faq.2.a" },
    { q: "faq.3.q", a: "faq.3.a" },
    { q: "faq.4.q", a: "faq.4.a" },
    { q: "faq.5.q", a: "faq.5.a" },
  ];

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("faq.title")}</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-foreground neon-text sm:text-4xl lg:text-5xl">
            {t("final.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            {t("final.sub")}
          </p>
          <button
            onClick={onOpenModal}
            className="neon-btn neon-pulse rounded-full px-10 py-4 text-base font-bold sm:text-lg"
          >
            {t("final.cta")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
