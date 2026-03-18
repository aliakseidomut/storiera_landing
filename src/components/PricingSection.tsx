import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: "price.1.name",
      priceKey: "price.1.price",
      descKey: "price.1.desc",
      features: ["price.1.f1", "price.1.f2", "price.1.f3"],
      ctaKey: "price.1.cta",
      highlight: false,
    },
    {
      nameKey: "price.2.name",
      priceKey: "price.2.price",
      periodKey: "price.2.period",
      descKey: "price.2.desc",
      features: ["price.2.f1", "price.2.f2", "price.2.f3", "price.2.f4"],
      ctaKey: "price.2.cta",
      highlight: true,
    },
    {
      nameKey: "price.3.name",
      priceKey: "price.3.price",
      periodKey: "price.3.period",
      descKey: "price.3.desc",
      features: ["price.3.f1", "price.3.f2", "price.3.f3", "price.3.f4", "price.3.f5"],
      ctaKey: "price.3.cta",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("price.title")}</h2>
          <p className="text-muted-foreground">{t("price.note")}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glow-card relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-neon/40 bg-card"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-neon px-3 py-0.5 text-xs font-semibold text-destructive-foreground">
                  <Crown className="h-3 w-3" /> BEST VALUE
                </span>
              )}
              <h3 className="mb-1 text-lg font-bold text-foreground">{t(plan.nameKey)}</h3>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-foreground">{t(plan.priceKey)}</span>
                {plan.periodKey && <span className="text-sm text-muted-foreground">{t(plan.periodKey)}</span>}
              </div>
              <p className="mb-6 text-sm text-muted-foreground">{t(plan.descKey)}</p>
              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-neon" />
                    {t(f)}
                  </li>
                ))}
              </ul>
              {plan.highlight ? (
                <button onClick={onOpenModal} className="neon-btn w-full rounded-lg py-2.5 text-sm font-bold">
                  {t(plan.ctaKey)}
                </button>
              ) : (
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent"
                  onClick={onOpenModal}
                >
                  {t(plan.ctaKey)}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
