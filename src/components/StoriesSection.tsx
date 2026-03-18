// src/components/StoriesSection.tsx  ← ЗАМЕНЯЕТ существующий файл полностью
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ChatModal from "@/components/ChatModal";
import { STORIES, Story } from "@/data/stories";

import storyTitanic from "@/assets/story-titanic.jpg";
import storySpiderman from "@/assets/story-spiderman.jpg";
import storyTwilight from "@/assets/story-twilight.jpg";
import storyMafia from "@/assets/story-mafia.jpg";
import storyCyberpunk from "@/assets/story-cyberpunk.jpg";
import storyPirate from "@/assets/story-pirate.jpg";

// Порядок совпадает с порядком в STORIES
const IMAGES = [
  storyTitanic,
  storySpiderman,
  storyTwilight,
  storyMafia,
  storyCyberpunk,
  storyPirate,
];

const StoriesSection = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [activeTitle, setActiveTitle] = useState<string>("");

  const openChat = (story: Story, img: string, title: string) => {
    setActiveStory(story);
    setActiveImage(img);
    setActiveTitle(title);
  };

  const closeChat = () => {
    setActiveStory(null);
  };

  return (
    <>
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("stories.title")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("stories.subtitle") || "Нажми на карточку — чат откроется прямо здесь"}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((story, i) => {
              const img = IMAGES[i];
              const title = t(story.titleKey);

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glow-card group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
                  onClick={() => openChat(story, img, title)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                        style={{ fontSize: 18 }}
                      >
                        ▶
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{t(story.descKey)}</p>
                    <p className="mb-4 rounded-lg bg-accent/50 p-3 text-xs italic text-secondary-foreground leading-relaxed">
                      {t(story.sceneKey)}
                    </p>
                    <button
                      className="neon-btn w-full rounded-lg px-4 py-2.5 text-sm font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        openChat(story, img, title);
                      }}
                    >
                      {t("stories.cta")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {activeStory && (
        <ChatModal
          story={activeStory}
          storyImage={activeImage}
          storyTitle={activeTitle}
          onClose={closeChat}
        />
      )}
    </>
  );
};

export default StoriesSection;
