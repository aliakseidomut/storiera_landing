import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingCTA = () => {
  const { t } = useLanguage();
  const goToApp = () => {
    window.location.href = "https://storiera.run.place/";
  };

  return (
    <motion.button
      type="button"
      aria-label={t("floating.cta")}
      onClick={goToApp}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-50 neon-btn neon-pulse rounded-full px-5 py-3 text-sm font-extrabold shadow-[0_12px_40px_-20px_hsla(var(--neon)/0.9)] sm:bottom-8 sm:right-8 sm:px-7 sm:py-4 sm:text-base"
    >
      {t("floating.cta")}
    </motion.button>
  );
};

export default FloatingCTA;

