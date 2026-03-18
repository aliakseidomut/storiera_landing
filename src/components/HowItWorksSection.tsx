import { motion } from "framer-motion";
import { Search, MessageCircle, MousePointer, Pencil } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const steps = [
    { icon: Search, num: "01", titleKey: "how.1.title", descKey: "how.1.desc" },
    { icon: MessageCircle, num: "02", titleKey: "how.2.title", descKey: "how.2.desc" },
    { icon: MousePointer, num: "03", titleKey: "how.3.title", descKey: "how.3.desc" },
    { icon: Pencil, num: "04", titleKey: "how.4.title", descKey: "how.4.desc" },
  ];

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("how.title")}</h2>
          <p className="text-muted-foreground">{t("how.sub")}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card group relative rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="mb-3 block text-3xl font-extrabold text-neon/30">{step.num}</span>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <step.icon className="h-6 w-6 text-neon" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">{t(step.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(step.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
