import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";

type Translations = {
  [key: string]: { ru: string; en: string };
};

const translations: Translations = {
  // Navbar
  "nav.signin": { ru: "Войти", en: "Sign In" },
  "nav.cta": { ru: "Погрузиться в историю", en: "Dive into a story" },
  
  // Hero
  "hero.headline": { ru: "Ты — главный герой своей самой горячей истории", en: "Become the hero of your own hottest story" },
  "hero.sub": { ru: "Поможет написать твой любовный роман и прожить его", en: "Helps you write your love story — and live it" },
  "hero.cta": { ru: "Создать свою историю бесплатно", en: "Create your story for free" },
  "hero.free": { ru: "Первый опыт полностью бесплатный", en: "First experience completely free" },
  "hero.trust": { ru: "18+ • 4.9/5 • 12 000+ историй", en: "18+ • 4.9/5 • 12,000+ stories" },
  "hero.scroll": { ru: "Листай вниз", en: "Scroll down" },

  // For Who
  "forwho.title": { ru: "Для кого Storiera?", en: "Who is Storiera for?" },
  "forwho.sub": { ru: "Для тех, кто хочет прожить роман, которого не хватало в жизни", en: "For those who want to live the romance they’ve been missing" },
  "forwho.1.title": { ru: "Если ты давно без отношений", en: "If you’ve been single for a while" },
  "forwho.1.desc": { ru: "Хочется внимания, флирта и чувства «меня выбирают» — без неловкости и ожиданий.", en: "You want attention, flirting, and the feeling of being chosen — without awkwardness or expectations." },
  "forwho.2.title": { ru: "Если ты в отношениях и хочешь перчинки", en: "If you’re in a relationship and want to spice it up" },
  "forwho.2.desc": { ru: "Иногда нужно новое напряжение и игра — чтобы снова почувствовать искру.", en: "Sometimes you need fresh tension and play — to feel the spark again." },
  "forwho.3.title": { ru: "Если тебя тянет на риск и жаркие сценарии", en: "If you crave risky, hot scenarios" },
  "forwho.3.desc": { ru: "Запретные диалоги, опасные повороты, «Титаник» и другие сюжеты — проживи то, что в реальности не решался.", en: "Forbidden dialogues, dangerous twists, “Titanic” vibes and more — live what you wouldn’t dare in real life." },
  "forwho.4.title": { ru: "Если ты хочешь роман — на своих правилах", en: "If you want romance on your terms" },
  "forwho.4.desc": { ru: "Ты выбираешь темп, границы и тон. Можно нежно, можно дерзко — как захочешь.", en: "You choose the pace, boundaries, and tone. Sweet or daring — however you want." },

  // Highlights (post-hero)
  "highlights.title": { ru: "Твоя история — без рамок", en: "Your story — without limits" },
  "highlights.sub": { ru: "Шесть принципов, на которых держится Storiera", en: "Six principles Storiera is built on" },
  "highlights.18plus": { ru: "18+ контент", en: "18+ content" },
  "highlights.instant": { ru: "Мгновенно", en: "Instant" },
  "highlights.anon": { ru: "100% анонимно", en: "100% anonymous" },
  "highlights.unique": { ru: "Уникально", en: "Unique" },
  "highlights.safe": { ru: "Безопасно", en: "Safe" },
  "highlights.nolimits": { ru: "Без лимитов фантазий", en: "No limits to fantasy" },

  // How it works
  "how.title": { ru: "Как это работает?", en: "How does it work?" },
  "how.sub": { ru: "4 простых шага до полного погружения", en: "4 simple steps to full immersion" },
  "how.1.title": { ru: "Выбери историю", en: "Choose a story" },
  "how.1.desc": { ru: "Романтика, триллер, фэнтези — выбирай жанр и сеттинг, который зажигает твоё воображение.", en: "Romance, thriller, fantasy — choose a genre and setting that ignites your imagination." },
  "how.2.title": { ru: "Читай как живой чат", en: "Read like a live chat" },
  "how.2.desc": { ru: "История разворачивается как настоящая переписка. Персонажи пишут тебе — и ждут ответа.", en: "The story unfolds like a real conversation. Characters text you — and wait for your reply." },
  "how.3.title": { ru: "Делай выборы", en: "Make choices" },
  "how.3.desc": { ru: "В ключевые моменты появляются кнопки выбора. Каждое решение меняет сюжет навсегда.", en: "At key moments, choice buttons appear. Every decision changes the plot forever." },
  "how.4.title": { ru: "Пиши свои слова", en: "Write your own words" },
  "how.4.desc": { ru: "Не хватает вариантов? Напиши что угодно — AI поймёт и продолжит историю по-твоему.", en: "Not enough options? Write anything — AI will understand and continue the story your way." },

  // Features
  "feat.title": { ru: "Почему Storiera — это другой уровень", en: "Why Storiera is next level" },
  "feat.sub": { ru: "Не просто текст. Это переживание.", en: "Not just text. It's an experience." },
  "feat.1.title": { ru: "AI-персонажи с памятью", en: "AI characters with memory" },
  "feat.1.desc": { ru: "Персонажи помнят всё, что ты сказал. Они реагируют на твои эмоции, обижаются, влюбляются.", en: "Characters remember everything you said. They react to your emotions, get offended, fall in love." },
  "feat.2.title": { ru: "Кинематографичные сцены", en: "Cinematic scenes" },
  "feat.2.desc": { ru: "Каждая история — как фильм. Драматические описания, музыка настроения, визуальные эффекты.", en: "Every story is like a movie. Dramatic descriptions, mood music, visual effects." },
  "feat.3.title": { ru: "Бесконечные сюжеты", en: "Infinite plots" },
  "feat.3.desc": { ru: "Нет двух одинаковых прохождений. AI генерирует уникальные ветки сюжета каждый раз.", en: "No two playthroughs are the same. AI generates unique plot branches every time." },
  "feat.4.title": { ru: "Полная свобода слова", en: "Complete freedom of expression" },
  "feat.4.desc": { ru: "Говори что хочешь. Флиртуй, провоцируй, раскрывай секреты — история подстроится.", en: "Say what you want. Flirt, provoke, reveal secrets — the story adapts." },
  "feat.5.title": { ru: "3 уровня откровенности", en: "3 levels of explicitness" },
  "feat.5.desc": { ru: "От нежной романтики до полной свободы без цензуры. Ты контролируешь градус.", en: "From gentle romance to full uncensored freedom. You control the heat." },
  "feat.6.title": { ru: "Мобильный формат", en: "Mobile format" },
  "feat.6.desc": { ru: "Читай в метро, в кровати, где угодно. Формат чата идеально подходит для телефона.", en: "Read on the subway, in bed, anywhere. Chat format is perfect for your phone." },

  // Testimonials
  "test.title": { ru: "Что говорят наши герои", en: "What our heroes say" },
  "test.sub": { ru: "Реальные отзывы реальных людей", en: "Real reviews from real people" },

  // Stories
  "stories.title": { ru: "Выбери свою первую историю и погрузись бесплатно", en: "Choose your first story and dive in for free" },
  "stories.cta": { ru: "Начать бесплатно", en: "Start for free" },

  // Story titles & descriptions
  "story.1.title": { ru: "Запретная любовь на Титанике", en: "Forbidden Love on the Titanic" },
  "story.1.desc": { ru: "Роскошный лайнер, ночь, айсберг уже близко… Один неверный выбор — и всё изменится навсегда.", en: "Luxury liner, night, the iceberg is near… One wrong choice — and everything changes forever." },
  "story.1.scene": { ru: "«Ты стоишь на верхней палубе. Холодный ветер треплет платье. Вдруг сильная рука касается твоей талии: \"Не бойся… я с тобой\"…»", en: "\"You stand on the upper deck. Cold wind whips your dress. Suddenly a strong hand touches your waist: 'Don't be afraid… I'm with you'…\"" },
  "story.2.title": { ru: "Тайная любовь со Спайдерменом", en: "Secret Love with Spider-Man" },
  "story.2.desc": { ru: "Нью-Йорк, крыши, маска и опасность. Он спасает город, но кто спасёт его сердце?", en: "New York, rooftops, mask and danger. He saves the city, but who will save his heart?" },
  "story.2.scene": { ru: "«Ты висишь на краю небоскрёба. Внезапно красная фигура ловит тебя: \"Ты в порядке?\" Под маской — глаза, которые ты никогда не забудешь…»", en: "\"You're hanging off the edge of a skyscraper. Suddenly a red figure catches you: 'Are you okay?' Behind the mask — eyes you'll never forget…\"" },
  "story.3.title": { ru: "Сумерки: Вечная страсть", en: "Twilight: Eternal Passion" },
  "story.3.desc": { ru: "Туманный Фоксвилл, вампиры и запретная любовь, от которой мурашки по коже.", en: "Foggy Foxville, vampires and forbidden love that gives you goosebumps." },
  "story.3.scene": { ru: "«Ты идёшь по лесу одна. Вдруг ледяная рука касается твоей щеки: \"Ты пахнешь… опасностью и желанием\"…»", en: "\"You walk through the forest alone. Suddenly an icy hand touches your cheek: 'You smell… of danger and desire'…\"" },
  "story.4.title": { ru: "Мафиозный король", en: "Mafia King" },
  "story.4.desc": { ru: "Власть, кровь и страсть. Один поцелуй — и ты уже в его мире.", en: "Power, blood and passion. One kiss — and you're already in his world." },
  "story.4.scene": { ru: "«Тёмный клуб. Он сидит в VIP-зоне, смотрит только на тебя: \"Сегодня ты моя\"…»", en: "\"Dark club. He sits in the VIP zone, looking only at you: 'Tonight you're mine'…\"" },
  "story.5.title": { ru: "Киберпанк: Неоновая любовь", en: "Cyberpunk: Neon Love" },
  "story.5.desc": { ru: "Токио 2077, хакеры, импланты и любовь, которая взламывает всё.", en: "Tokyo 2077, hackers, implants and a love that hacks everything." },
  "story.5.scene": { ru: "«Неоновый дождь. Он снимает очки: \"Твой код… он идеален. Как и ты\"…»", en: "\"Neon rain. He takes off his glasses: 'Your code… it's perfect. Just like you'…\"" },
  "story.6.title": { ru: "Пиратская королева Карибов", en: "Pirate Queen of the Caribbean" },
  "story.6.desc": { ru: "Золото, штормы и страсть на грани жизни и смерти.", en: "Gold, storms and passion on the edge of life and death." },
  "story.6.scene": { ru: "«Ты на капитанском мостике. Она приставляет саблю к твоему горлу с улыбкой: \"Выбирай: поцелуй или прыжок за борт?\"…»", en: "\"You're on the captain's bridge. She puts a saber to your throat with a smile: 'Choose: a kiss or jump overboard?'…\"" },

  "story.7.title": { ru: "Нуар: Дело о запретной ночи", en: "Noir: Case of the Forbidden Night" },
  "story.7.desc": { ru: "Дождь, неон и детектив, который слишком хорошо читает людей — особенно тебя.", en: "Rain, neon, and a detective who reads people too well—especially you." },
  "story.7.scene": { ru: "«Полутёмный кабинет. Он закрывает дверь и говорит тихо: \"Цена — доверие\"…»", en: "\"A dim office. He locks the door and says softly: 'The price is trust'…\"" },

  // Pricing
  "price.title": { ru: "Начни бесплатно — продолжай когда влюбишься", en: "Start free — continue when you fall in love" },
  "price.note": { ru: "Плати только когда не сможешь остановиться", en: "Pay only when you can't stop" },
  "price.1.name": { ru: "Новичок", en: "Newbie" },
  "price.1.price": { ru: "Бесплатно", en: "Free" },
  "price.1.desc": { ru: "Погружайся и попробуй формат без оплаты", en: "Jump in and try the format for free" },
  "price.1.f1": { ru: "Старт без оплаты", en: "Start for free" },
  "price.1.f2": { ru: "Базовые возможности", en: "Core features" },
  "price.1.f3": { ru: "Можно в любой момент перейти на подписку", en: "Upgrade anytime" },
  "price.1.cta": { ru: "Начать бесплатно", en: "Start free" },
  "price.2.name": { ru: "Любовник", en: "Lover" },
  "price.2.price": { ru: "$9.99", en: "$9.99" },
  "price.2.period": { ru: "/неделя", en: "/week" },
  "price.2.desc": { ru: "Недельная подписка — самый горячий старт", en: "Weekly subscription — the hottest start" },
  "price.2.f1": { ru: "Безлимитный доступ", en: "Unlimited access" },
  "price.2.f2": { ru: "Все жанры и персонажи", en: "All genres and characters" },
  "price.2.f3": { ru: "Приоритетная генерация", en: "Priority generation" },
  "price.2.f4": { ru: "Новые истории каждый день", en: "New stories every day" },
  "price.2.cta": { ru: "Выбрать неделю", en: "Choose weekly" },
  "price.3.name": { ru: "Мастер", en: "Master" },
  "price.3.price": { ru: "$99.90", en: "$99.90" },
  "price.3.period": { ru: "/год", en: "/year" },
  "price.3.desc": { ru: "Годовая подписка для тех, кто входит во вкус", en: "Yearly plan for those who are all in" },
  "price.3.f1": { ru: "Всё из недельной подписки", en: "Everything in weekly" },
  "price.3.f2": { ru: "Выгоднее, чем платить каждую неделю", en: "Better value than weekly" },
  "price.3.f3": { ru: "Приоритетная генерация", en: "Priority generation" },
  "price.3.f4": { ru: "Новые истории каждый день", en: "New stories every day" },
  "price.3.f5": { ru: "Поддержка", en: "Support" },
  "price.3.cta": { ru: "Выбрать год", en: "Choose yearly" },

  // FAQ
  "faq.title": { ru: "Частые вопросы", en: "FAQ" },
  "faq.1.q": { ru: "Это безопасно? Кто-то увидит мои истории?", en: "Is it safe? Will anyone see my stories?" },
  "faq.1.a": { ru: "Полная приватность. Никто, кроме тебя, не имеет доступа к твоим историям. Мы не делимся данными и не показываем их другим пользователям.", en: "Complete privacy. Nobody but you has access to your stories. We don't share data or show it to other users." },
  "faq.2.q": { ru: "Можно ли играть бесплатно?", en: "Can I play for free?" },
  "faq.2.a": { ru: "Да! Первая история полностью бесплатна. Ты можешь попробовать весь функционал без оплаты.", en: "Yes! The first story is completely free. You can try all features without payment." },
  "faq.3.q": { ru: "Насколько откровенный контент?", en: "How explicit is the content?" },
  "faq.3.a": { ru: "Ты сам выбираешь уровень: от нежной романтики до полной свободы без цензуры. Контролируй градус в настройках.", en: "You choose the level: from gentle romance to full uncensored freedom. Control the heat in settings." },
  "faq.4.q": { ru: "AI действительно понимает мои слова?", en: "Does AI really understand my words?" },
  "faq.4.a": { ru: "Да, наш AI обучен понимать контекст, эмоции и намёки. Он реагирует на всё — от флирта до провокаций.", en: "Yes, our AI is trained to understand context, emotions and hints. It reacts to everything — from flirting to provocations." },
  "faq.5.q": { ru: "Какой минимальный возраст?", en: "What's the minimum age?" },
  "faq.5.a": { ru: "Storiera — платформа 18+. При регистрации необходимо подтвердить возраст.", en: "Storiera is an 18+ platform. Age verification is required during registration." },

  // Final CTA
  "final.title": { ru: "Твоя история ждёт. Не заставляй её ждать.", en: "Your story awaits. Don't keep it waiting." },
  "final.sub": { ru: "Присоединяйся к 12 000+ людям, которые уже живут в своих историях", en: "Join 12,000+ people who are already living their stories" },
  "final.cta": { ru: "Начать свою историю бесплатно", en: "Start your story for free" },
  
  // Floating CTA
  "floating.cta": { ru: "Начать писать роман", en: "Start writing a romance" },

  // Modal
  "modal.title": { ru: "Начни свою историю за 30 секунд", en: "Start your story in 30 seconds" },
  "modal.email": { ru: "Email", en: "Email" },
  "modal.password": { ru: "Пароль", en: "Password" },
  "modal.age": { ru: "Возраст", en: "Age" },
  "modal.level": { ru: "Уровень откровенности", en: "Explicitness level" },
  "modal.low": { ru: "Низкий", en: "Low" },
  "modal.low.desc": { ru: "нежная романтика", en: "gentle romance" },
  "modal.mid": { ru: "Средний", en: "Medium" },
  "modal.mid.desc": { ru: "страсть и эмоции", en: "passion and emotions" },
  "modal.high": { ru: "Высокий", en: "High" },
  "modal.high.desc": { ru: "полная свобода", en: "full freedom" },
  "modal.age18": { ru: "Мне есть 18 лет", en: "I am 18 or older" },
  "modal.submit": { ru: "Создать аккаунт и погрузиться", en: "Create account and dive in" },

  // Footer
  "footer.terms": { ru: "Условия", en: "Terms" },
  "footer.privacy": { ru: "Конфиденциальность", en: "Privacy" },
  "footer.support": { ru: "Поддержка", en: "Support" },
  "footer.copy": { ru: "© 2026 Storiera. Все права защищены.", en: "© 2026 Storiera. All rights reserved." },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");
  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
