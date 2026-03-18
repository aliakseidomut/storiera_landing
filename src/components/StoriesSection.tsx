// src/components/StoriesSection.tsx  ← ЗАМЕНЯЕТ существующий файл полностью
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ChatModal from "@/components/ChatModal";
import { STORIES, History } from "@/data/stories";

import storyTitanic from "@/assets/story-titanic.jpg";
import storySpiderman from "@/assets/story-spiderman.jpg";
import storyTwilight from "@/assets/story-twilight.jpg";
import storyMafia from "@/assets/story-mafia.jpg";
import storyCyberpunk from "@/assets/story-cyberpunk.jpg";
import storyPirate from "@/assets/story-pirate.jpg";
import showcase1 from "@/assets/showcase-1.jpg";

const IMAGE_BY_KEY: Record<string, string> = {
  "story-titanic": storyTitanic,
  "story-spiderman": storySpiderman,
  "story-twilight": storyTwilight,
  "story-mafia": storyMafia,
  "story-cyberpunk": storyCyberpunk,
  "story-pirate": storyPirate,
  "showcase-1": showcase1,
};

const StoriesSection = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState<History | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [activeTitle, setActiveTitle] = useState<string>("");

  const openChat = (story: History, img: string, title: string) => {
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

          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((story, i) => {
              // Map id -> existing image keys
              const imgKey =
                story.id === "titanic"
                  ? "story-titanic"
                  : story.id === "spiderman"
                    ? "story-spiderman"
                    : story.id === "twilight"
                      ? "story-twilight"
                      : story.id === "mafia"
                        ? "story-mafia"
                        : story.id === "cyberpunk"
                          ? "story-cyberpunk"
                          : story.id === "noir"
                            ? "showcase-1"
                          : "story-pirate";
              const img = IMAGE_BY_KEY[imgKey] ?? storyTitanic;
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
