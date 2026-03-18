import { motion } from "framer-motion";
import { Brain, Film, Infinity, MessageSquare, Flame, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const features = [
    { icon: Brain, titleKey: "feat.1.title", descKey: "feat.1.desc" },
    { icon: Film, titleKey: "feat.2.title", descKey: "feat.2.desc" },
    { icon: Infinity, titleKey: "feat.3.title", descKey: "feat.3.desc" },
    { icon: MessageSquare, titleKey: "feat.4.title", descKey: "feat.4.desc" },
    { icon: Flame, titleKey: "feat.5.title", descKey: "feat.5.desc" },
    { icon: Smartphone, titleKey: "feat.6.title", descKey: "feat.6.desc" },
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
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("feat.title")}</h2>
          <p className="text-muted-foreground">{t("feat.sub")}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card group rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <feat.icon className="h-5 w-5 text-neon" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">{t(feat.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(feat.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
