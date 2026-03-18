import { BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-neon" />
          <span className="text-sm font-bold text-foreground">Storiera</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">{t("footer.terms")}</a>
          <a href="#" className="transition-colors hover:text-foreground">{t("footer.privacy")}</a>
          <a href="#" className="transition-colors hover:text-foreground">{t("footer.support")}</a>
        </div>
        <p className="text-xs text-muted-foreground">{t("footer.copy")}</p>
      </div>
    </footer>
  );
};

export default Footer;
