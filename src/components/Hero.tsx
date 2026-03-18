import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Storiera hero"
          className="h-full w-full object-cover object-top"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="absolute right-[245px] top-24 z-20 sm:right-[265px] sm:top-28"
      >
        <span
          aria-label="18+"
          className="neon-btn neon-pulse inline-flex h-[4.5rem] w-[4.5rem] select-none items-center justify-center rounded-full text-4xl font-extrabold tracking-wide text-white sm:h-24 sm:w-24 sm:text-4xl"
        >
          18+
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground neon-text sm:text-5xl lg:text-7xl"
        >
          {t("hero.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={onOpenModal}
            className="neon-btn neon-pulse rounded-full px-8 py-4 text-base font-bold sm:px-12 sm:text-lg"
          >
            {t("hero.cta")}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">{t("hero.scroll")}</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
