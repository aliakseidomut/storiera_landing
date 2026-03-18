// src/components/ChatModal.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { History } from "@/data/stories";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
  choices?: string[];
}

// ─── Typing dots ──────────────────────────────────────────────────────────────

const TypingDots = ({ color }: { color: string }) => (
  <div className="flex items-center gap-1.5 py-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
          animation: `chatDotBounce 1.2s ${i * 0.2}s ease-in-out infinite`,
        }}
      />
    ))}
  </div>
);

// ─── Message renderer (handles *italic* lines) ────────────────────────────────

const MessageText = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, i) => {
      if (line.startsWith("*") && line.endsWith("*")) {
        return (
          <em key={i} className="block text-xs text-muted-foreground mt-1 not-italic" style={{ fontStyle: "italic", opacity: 0.75 }}>
            {line.slice(1, -1)}
          </em>
        );
      }
      if (line === "") return <br key={i} />;
      return <span key={i} className="block mt-1 first:mt-0">{line}</span>;
    })}
  </>
);

// ─── Local mock engine (no backend) ───────────────────────────────────────────

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

const pick = <T,>(arr: T[], seed: number) => arr[seed % arr.length];

const buildMockReply = (story: History, userText: string, turn: number): { content: string; choices: string[] } => {
  const seed = hash(`${story.id}|${turn}|${userText}`);

  const atmospheres = [
    "*В воздухе дрожит напряжение. Кажется, один шаг — и всё изменится.*",
    "*Слова остаются между вами, как тёплый след на коже.*",
    "*Снаружи мир шумит, но здесь слышно только дыхание.*",
    "*Тишина становится интимной — слишком близкой, слишком честной.*",
    "*Время будто замирает, оставляя вам право на выбор.*",
  ];

  const openers = {
    titanic: [
      "Я улыбаюсь краем губ и чуть наклоняюсь ближе, чтобы ветер не унес твои слова.",
      "Я опираюсь на перила рядом с тобой — так близко, что ты чувствуешь тепло.",
      "Я смотрю на море, а потом возвращаю взгляд к тебе: будто всё самое важное — здесь.",
    ],
    spiderman: [
      "Я пытаюсь пошутить, но голос внезапно становится слишком тихим и серьёзным.",
      "Я цепляюсь рукой за трос и подаю тебе ладонь — не отпущу, если возьмёшься.",
      "Я делаю шаг ближе, и маска уже не кажется границей.",
    ],
    twilight: [
      "Я задерживаю взгляд на твоих губах дольше, чем позволил бы здравый смысл.",
      "Я дышу медленно — как будто это единственный способ себя контролировать.",
      "Я отступаю на полшага… и всё равно остаюсь опасно близко.",
    ],
    mafia: [
      "Я говорю спокойно, но в голосе слышна власть — и обещание.",
      "Я чуть приподнимаю твой подбородок двумя пальцами, проверяя, дрогнешь ли ты.",
      "Я улыбаюсь так, будто уже решил исход — но оставляю выбор тебе.",
    ],
    cyberpunk: [
      "Неон отражается в моих имплантах, когда я наконец смотрю прямо на тебя.",
      "Я шепчу так, словно слова — это пароль, который ты можешь принять или отвергнуть.",
      "Я наклоняюсь ближе, и мир превращается в короткое замыкание.",
    ],
    pirate: [
      "Я смеюсь низко и хищно, будто ты — самая сладкая добыча этого моря.",
      "Я делаю круг вокруг тебя, словно палуба — сцена, а ты — мой единственный зритель.",
      "Я склоняю голову и говорю тихо, чтобы слышала только ты.",
    ],
    default: [
      "Я задерживаю взгляд на тебе дольше, чем следует.",
      "Я делаю шаг ближе — медленно, давая тебе время остановить меня.",
      "Я отвечаю спокойно, но между строк всё равно слышна жара.",
    ],
  } as const;

  const opener = pick((openers as any)[story.id] ?? openers.default, seed);
  const atmosphere = pick(atmospheres, seed + 7);

  const content = `${opener} «${userText.trim()}», — повторяю я тихо, будто пробую эти слова на вкус.\n${atmosphere}`;

  const choices = [
    pick(
      [
        "Я улыбаюсь и делаю шаг навстречу.",
        "Я отвечаю мягко и честно.",
        "Я позволяю себе быть нежной.",
      ],
      seed + 1
    ),
    pick(
      [
        "Я бросаю дерзкий вызов и не отвожу взгляд.",
        "Я приближаюсь слишком близко — нарочно.",
        "Я говорю провокацию и жду реакцию.",
      ],
      seed + 2
    ),
    pick(
      [
        "Я задаю вопрос, который меняет правила игры.",
        "Я молчу секунду… и делаю неожиданный выбор.",
        "Я намекаю на секрет и проверяю тебя.",
      ],
      seed + 3
    ),
  ];

  return { content, choices };
};

// ─── Main Modal ───────────────────────────────────────────────────────────────

interface ChatModalProps {
  story: History;
  storyImage: string;
  storyTitle: string;
  onClose: () => void;
}

const ChatModal = ({ story, storyImage, storyTitle, onClose }: ChatModalProps) => {
  const { lang } = useLanguage();

  const [currentStepId, setCurrentStepId] = useState<string>(story.startStepId);

  const getStep = useCallback(
    (stepId: string) => story.steps[stepId] ?? story.steps[story.startStepId],
    [story]
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: getStep(story.startStepId).message,
      choices: getStep(story.startStepId).choices.map((c) => c.text),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const advanceByChoice = useCallback(
    async (userText: string, nextStepId: string) => {
      if (!userText.trim() || loading) return;
      setInput("");

      // Optimistically add user message + loading placeholder
      setMessages((prev) => [
        ...prev,
        { role: "user", content: userText },
        { role: "assistant", content: "", choices: [] },
      ]);
      setLoading(true);

      try {
        await new Promise((r) => setTimeout(r, 450));

        const nextStep = getStep(nextStepId);
        setCurrentStepId(nextStepId);

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: nextStep.message,
            choices: nextStep.choices.map((c) => c.text),
          };
          return updated;
        });
      } catch {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Ошибка. Попробуй ещё раз.",
            choices: [],
          };
          return updated;
        });
      }

      setLoading(false);
    },
    [getStep, loading]
  );

  const sendMessage = useCallback(async (userText: string) => {
    if (!userText.trim() || loading) return;
    const step = getStep(currentStepId);
    const options = step.choices;
    if (!options || options.length === 0) return;

    // If user typed free text, pick a branch deterministically.
    const seed = hash(`${story.id}|${currentStepId}|${userText}`);
    const chosen = options[seed % options.length];
    await advanceByChoice(userText, chosen.nextStepId);
  }, [advanceByChoice, currentStepId, getStep, loading, story.id]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const lastMessageIndex = messages.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Keyframe styles */}
        <style>{`
          @keyframes chatDotBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          @keyframes chatMsgIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .chat-msg { animation: chatMsgIn 0.25s ease both; }
          .chat-input:focus { outline: none; }
          .choice-btn:hover { border-color: var(--story-accent) !important; background: color-mix(in srgb, var(--story-accent) 12%, transparent) !important; transform: translateY(-1px); }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="flex flex-col w-full overflow-hidden rounded-2xl border border-border bg-card"
          style={{
            maxWidth: 520,
            height: "min(90vh, 760px)",
            boxShadow: `0 0 60px ${story.accentColor}33, 0 24px 80px rgba(0,0,0,0.8)`,
            // CSS variable for accent colour used by .choice-btn
            ["--story-accent" as string]: story.accentColor,
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center gap-3 border-b border-border px-5 py-3 flex-shrink-0"
            style={{ background: "hsl(var(--card))" }}
          >
            <div
              className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2"
              style={{ borderColor: story.accentColor + "66" }}
            >
              <img src={storyImage} alt={storyTitle} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-bold text-foreground">{storyTitle}</p>
              <p className="flex items-center gap-1.5 text-xs" style={{ color: story.accentColor }}>
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
                />
                {lang === "ru" ? "Интерактивный сюжет · 18+" : "Interactive story · 18+"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} gap-2`}
              >
                {/* Bubble */}
                {msg.role === "assistant" ? (
                  <div
                    className="max-w-[88%] rounded-tl-sm rounded-2xl border border-border bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground"
                  >
                    {loading && i === lastMessageIndex && !msg.content ? (
                      <TypingDots color={story.accentColor} />
                    ) : (
                      <MessageText text={msg.content} />
                    )}
                  </div>
                ) : (
                  <div
                    className="max-w-[78%] rounded-tr-sm rounded-2xl px-4 py-3 text-sm font-medium leading-relaxed"
                    style={{
                      background: `linear-gradient(135deg, ${story.accentColor}, ${story.accentColor}99)`,
                      color: "#000",
                    }}
                  >
                    {msg.content}
                  </div>
                )}

                {/* Choice buttons — only on last assistant message when not loading */}
                {msg.role === "assistant" &&
                  msg.choices &&
                  msg.choices.length > 0 &&
                  !loading &&
                  i === lastMessageIndex && (
                    <div className="flex w-[88%] flex-col gap-2">
                      {msg.choices.map((choice, ci) => (
                        <button
                          key={ci}
                          onClick={() => {
                            const step = getStep(currentStepId);
                            const found = step.choices.find((c) => c.text === choice);
                            void advanceByChoice(choice, found?.nextStepId ?? story.startStepId);
                          }}
                          className="choice-btn rounded-xl border border-border bg-card px-3 py-2.5 text-left text-xs text-secondary-foreground transition-all duration-200"
                        >
                          <span className="mr-2 text-[10px]" style={{ color: story.accentColor }}>▸</span>
                          {choice}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* ── Input ── */}
          <div className="flex-shrink-0 border-t border-border bg-card px-4 pb-4 pt-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={lang === "ru" ? "Напиши что угодно…" : "Write anything…"}
                disabled={loading}
                rows={1}
                className="chat-input flex-1 resize-none rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-ring"
                style={{ maxHeight: 120, overflowY: "auto", lineHeight: 1.5 }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = "auto";
                  t.style.height = Math.min(t.scrollHeight, 120) + "px";
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 disabled:opacity-30"
                style={{
                  background: input.trim() && !loading ? story.accentColor : "hsl(var(--secondary))",
                  color: input.trim() && !loading ? "#000" : "hsl(var(--muted-foreground))",
                  boxShadow: input.trim() && !loading ? `0 0 12px ${story.accentColor}66` : "none",
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              18+ · {lang === "ru" ? "только для взрослых · Enter для отправки" : "adults only · Enter to send"}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatModal;
