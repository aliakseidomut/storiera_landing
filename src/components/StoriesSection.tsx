import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import storyTitanic from "@/assets/story-titanic.jpg";
import storySpiderman from "@/assets/story-spiderman.jpg";
import storyTwilight from "@/assets/story-twilight.jpg";
import storyMafia from "@/assets/story-mafia.jpg";
import storyCyberpunk from "@/assets/story-cyberpunk.jpg";
import storyPirate from "@/assets/story-pirate.jpg";

const storyImages = [storyTitanic, storySpiderman, storyTwilight, storyMafia, storyCyberpunk, storyPirate];

const StoriesSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { t } = useLanguage();

  const stories = [
    { img: storyImages[0], titleKey: "story.1.title", descKey: "story.1.desc", sceneKey: "story.1.scene" },
    { img: storyImages[1], titleKey: "story.2.title", descKey: "story.2.desc", sceneKey: "story.2.scene" },
    { img: storyImages[2], titleKey: "story.3.title", descKey: "story.3.desc", sceneKey: "story.3.scene" },
    { img: storyImages[3], titleKey: "story.4.title", descKey: "story.4.desc", sceneKey: "story.4.scene" },
    { img: storyImages[4], titleKey: "story.5.title", descKey: "story.5.desc", sceneKey: "story.5.scene" },
    { img: storyImages[5], titleKey: "story.6.title", descKey: "story.6.desc", sceneKey: "story.6.scene" },
  ];

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("stories.title")}</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.img}
                  alt={t(story.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-foreground">{t(story.titleKey)}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{t(story.descKey)}</p>
                <p className="mb-4 rounded-lg bg-accent/50 p-3 text-xs italic text-secondary-foreground leading-relaxed">
                  {t(story.sceneKey)}
                </p>
                <button
                  onClick={onOpenModal}
                  className="neon-btn w-full rounded-lg px-4 py-2.5 text-sm font-bold"
                >
                  {t("stories.cta")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
