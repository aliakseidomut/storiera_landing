import { motion } from "framer-motion";
import { BookOpen, Heart, UserCheck, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ForWhoSection = () => {
  const { t } = useLanguage();
  const items = [
    { icon: BookOpen, titleKey: "forwho.1.title", descKey: "forwho.1.desc" },
    { icon: Heart, titleKey: "forwho.2.title", descKey: "forwho.2.desc" },
    { icon: UserCheck, titleKey: "forwho.3.title", descKey: "forwho.3.desc" },
    { icon: Shield, titleKey: "forwho.4.title", descKey: "forwho.4.desc" },
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
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("forwho.title")}</h2>
          <p className="text-muted-foreground">{t("forwho.sub")}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card group rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <item.icon className="h-5 w-5 text-neon" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
