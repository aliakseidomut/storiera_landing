import { motion } from "framer-motion";
import { BadgeCheck, Bolt, Fingerprint, ShieldCheck, Sparkles, Infinity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HighlightsSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: BadgeCheck, titleKey: "highlights.18plus" },
    { icon: Bolt, titleKey: "highlights.instant" },
    { icon: Fingerprint, titleKey: "highlights.anon" },
    { icon: Sparkles, titleKey: "highlights.unique" },
    { icon: ShieldCheck, titleKey: "highlights.safe" },
    { icon: Infinity, titleKey: "highlights.nolimits" },
  ];

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 px-6 py-10 backdrop-blur sm:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[hsl(var(--neon))]/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[hsl(var(--neon-glow))]/10 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="relative mb-8 text-center"
          >
            <h2 className="text-gradient mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("highlights.title")}
            </h2>
            <p className="text-muted-foreground">{t("highlights.sub")}</p>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="flex h-full items-center justify-center gap-3 rounded-full border border-border bg-background/40 px-6 py-4 text-base font-semibold text-foreground shadow-[0_0_0_1px_hsla(var(--neon)/0.0)] transition-all duration-300 hover:border-[hsl(var(--neon))]/40 hover:shadow-[0_0_0_1px_hsla(var(--neon)/0.25),0_0_40px_-20px_hsla(var(--neon)/0.6)] sm:px-8 sm:py-5 sm:text-lg">
                  <item.icon className="h-5 w-5 shrink-0 text-neon transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                  <span className="tracking-tight">{t(item.titleKey)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

