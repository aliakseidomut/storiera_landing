import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  ru: [
    { name: "Алина", age: 23, country: "Россия", text: "Я залипла на 5 часов. Это как фильм, только ты сама решаешь, что будет дальше. Невозможно оторваться!", avatar: "👩‍🦰" },
    { name: "Дмитрий", age: 28, country: "Украина", text: "Думал, это детский формат. Оказалось — мощнейшая вещь. AI реально понимает мои фразы и реагирует.", avatar: "👨" },
    { name: "Мария", age: 21, country: "Казахстан", text: "Мафиозный король — лучшая история, которую я когда-либо переживала. Мурашки до сих пор.", avatar: "👩" },
    { name: "Артём", age: 31, country: "Беларусь", text: "Купил пожизненный доступ через 2 часа. Не жалею ни секунды. Это будущее развлечений.", avatar: "🧔" },
    { name: "Кристина", age: 25, country: "Россия", text: "Наконец-то что-то, где я главная героиня. Не пассивный зритель, а участник. Обожаю!", avatar: "👱‍♀️" },
    { name: "Виктор", age: 34, country: "Польша", text: "Киберпанк-история — это нечто. Настолько immersive, что забываешь, что это AI.", avatar: "👨‍💻" },
    { name: "Анна", age: 19, country: "Россия", text: "Подруга посоветовала. Теперь мы обе не можем остановиться. Каждый вечер — новая история.", avatar: "👩‍🎤" },
    { name: "Максим", age: 27, country: "Германия", text: "Пиратская королева — мой фаворит. Каждый раз по-разному. Гениальная система выборов.", avatar: "🧑" },
  ],
  en: [
    { name: "Alina", age: 23, country: "Russia", text: "I was hooked for 5 hours. It's like a movie, but you decide what happens next. Impossible to stop!", avatar: "👩‍🦰" },
    { name: "Dmitry", age: 28, country: "Ukraine", text: "Thought it was a kids' format. Turned out to be incredibly powerful. AI really understands my phrases.", avatar: "👨" },
    { name: "Maria", age: 21, country: "Kazakhstan", text: "Mafia King — the best story I've ever experienced. Still getting goosebumps.", avatar: "👩" },
    { name: "Artem", age: 31, country: "Belarus", text: "Bought lifetime access after 2 hours. Don't regret a second. This is the future of entertainment.", avatar: "🧔" },
    { name: "Kristina", age: 25, country: "Russia", text: "Finally something where I'm the main character. Not a passive viewer, but a participant. Love it!", avatar: "👱‍♀️" },
    { name: "Viktor", age: 34, country: "Poland", text: "The cyberpunk story is something else. So immersive you forget it's AI.", avatar: "👨‍💻" },
    { name: "Anna", age: 19, country: "Russia", text: "A friend recommended it. Now we both can't stop. Every evening — a new story.", avatar: "👩‍🎤" },
    { name: "Maxim", age: 27, country: "Germany", text: "Pirate Queen is my favorite. Different every time. Genius choice system.", avatar: "🧑" },
  ],
};

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();
  const items = testimonials[lang];

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
          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t("test.title")}</h2>
          <p className="text-muted-foreground">{t("test.sub")}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glow-card rounded-2xl border border-border bg-card p-5"
            >
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-neon text-neon" />
                ))}
              </div>
              <p className="mb-4 text-sm text-secondary-foreground leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.avatar}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}, {item.age}</p>
                  <p className="text-xs text-muted-foreground">{item.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
