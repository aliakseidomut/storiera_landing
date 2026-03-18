import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang, t } = useLanguage();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-neon" />
          <span className="text-lg font-bold tracking-tight text-foreground">Storiera</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-0.5">
            <button
              onClick={() => setLang("ru")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${lang === "ru" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              🇷🇺 RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${lang === "en" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              🇬🇧 EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button size="sm" className="neon-btn border-0 font-semibold" onClick={onOpenModal}>
            {t("nav.cta")}
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-0.5">
                  <button
                    onClick={() => setLang("ru")}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${lang === "ru" ? "bg-accent text-foreground" : "text-muted-foreground"}`}
                  >
                    🇷🇺 RU
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${lang === "en" ? "bg-accent text-foreground" : "text-muted-foreground"}`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
              <Button size="sm" className="neon-btn border-0 font-semibold" onClick={() => { setMobileOpen(false); onOpenModal(); }}>
                {t("nav.cta")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
