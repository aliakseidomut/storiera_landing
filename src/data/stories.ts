export type LocalizedText = { ru: string; en: string };

export interface HistoryChoice {
  text: LocalizedText;
  nextStepId: string;
}

export interface HistoryStep {
  message: LocalizedText;
  choices: HistoryChoice[];
}

export interface History {
  id: string;
  titleKey: string;
  descKey: string;
  accentColor: string;
  startStepId: string;
  steps: Record<string, HistoryStep>;
}

export const STORIES: History[] = [
  {
    id: "titanic",
    titleKey: "story.1.title",
    descKey: "story.1.desc",
    accentColor: "#60a5fa",
    startStepId: "1_start",
    steps: {
      "1_start": {
        message: {
          ru: "Холодный морской ветер заставляет тебя дрожать, но Джек подходит сзади, набрасывая свое пальто тебе на плечи. Его руки задерживаются на твоих ключицах, пальцы медленно скользят под ткань платья. «Ты пахнешь как запретный плод, Роза», — шепчет он, прижимаясь лицом к твоим волосам. \n\n *Огромные трубы корабля извергают дым в звездное небо.*",
          en: "Cold sea wind makes you shiver, but Jack comes up behind you, draping his coat over your shoulders. His hands linger at your collarbones; his fingers slide slowly under the fabric of your dress. “You smell like forbidden fruit, Rose,” he whispers, pressing his face into your hair.\n\n*The ship’s giant funnels breathe smoke into the starry sky.*",
        },
        choices: [
          { text: { ru: "Прижаться спиной к его груди", en: "Lean back against his chest" }, nextStepId: "1_touch" },
          { text: { ru: "Развернуться и поцеловать его", en: "Turn around and kiss him" }, nextStepId: "1_touch" },
          { text: { ru: "«Покажи мне, где ты спишь, Джек»", en: "“Show me where you sleep, Jack.”" }, nextStepId: "1_touch" },
        ]
      },
      "1_touch": {
        message: {
          ru: "Он обхватывает твою талию, и ты чувствуешь, как его дыхание становится тяжелым. Его ладонь поднимается выше, бесцеремонно накрывая твою грудь через тонкий шелк. «Твое сердце бьется так быстро... ты боишься меня или того, что я сейчас сделаю?» — его пальцы начинают дразнить сосок, вызывая волну жара внизу живота.",
          en: "He wraps an arm around your waist, and you feel his breathing turn heavy. His palm slides higher, boldly covering your chest through the thin silk. “Your heart’s racing… are you afraid of me, or of what I’m about to do?” His fingers tease you, sending a wave of heat low in your stomach.",
        },
        choices: [
          { text: { ru: "Издать негромкий стон", en: "Let out a quiet moan" }, nextStepId: "1_climax_prep" },
          { text: { ru: "Повернуться и расстегнуть его ремень", en: "Turn and undo his belt" }, nextStepId: "1_climax_prep" },
          { text: { ru: "«Я хочу, чтобы ты не останавливался»", en: "“I don’t want you to stop.”" }, nextStepId: "1_climax_prep" },
        ]
      },
      "1_climax_prep": {
        message: {
          ru: "Джек подхватывает тебя под бедра и усаживает на перила, удерживая за талию. Его губы впиваются в твою шею, оставляя горячие следы, пока рука бесстыдно задирает подол твоего тяжелого платья. «Здесь, прямо над океаном... я хочу чувствовать твою влажность на своих пальцах», — рычит он.",
          en: "Jack lifts you under the thighs and sets you on the railing, holding you by the waist. His mouth finds your neck, leaving hot marks while his hand shamelessly slides under the heavy fabric. “Here, right above the ocean… I want to feel you on my fingers,” he growls.",
        },
        choices: [
          { text: { ru: "Обхватить его ногами", en: "Wrap your legs around him" }, nextStepId: "1_final" },
          { text: { ru: "Умолять его войти в тебя", en: "Beg him to come closer" }, nextStepId: "1_final" },
          { text: { ru: "Отдаться его ласкам полностью", en: "Give yourself to his touch" }, nextStepId: "1_final" },
        ]
      },
      "1_final": {
        message: {
          ru: "Мир вокруг исчезает. Есть только ритм, скрип металла и соленый вкус его кожи. В момент пика тебе кажется, что корабль идет ко дну, но тебе плевать — в объятиях Джека эта гибель кажется самой сладкой наградой. \n\n *Вы тяжело дышите, глядя на темную воду, скользящую далеко внизу.*\n\n*Конец демо. Продолжение — в приложении.*",
          en: "The world fades away. There’s only rhythm, metal creaking, and the salty taste of his skin. At the peak, it almost feels like the ship is sinking — but you don’t care. In Jack’s arms, even disaster feels like the sweetest reward.\n\n*You breathe hard, staring at the dark water far below.*\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      }
    }
  },
  {
    id: "mafia",
    titleKey: "story.4.title",
    descKey: "story.4.desc",
    accentColor: "#fbbf24",
    startStepId: "4_start",
    steps: {
      "4_start": {
        message: {
          ru: "Лоренцо делает глоток виски и ставит бокал на стол с глухим стуком. Он притягивает тебя за талию так резко, что ты вскрикиваешь. «Ты думала, что можешь просто смотреть на меня весь вечер и уйти безнаказанной?» — его голос вибрирует от сдерживаемого вожделения. \n\n *Запах дорогого парфюма смешивается с ароматом сигар.*",
          en: "Lorenzo takes a sip of whiskey and sets the glass down with a dull thud. He pulls you in by the waist so sharply you gasp. “You thought you could stare at me all night and walk away unpunished?” His voice vibrates with restrained desire.\n\n*Expensive perfume mixes with cigar smoke.*",
        },
        choices: [
          { text: { ru: "Сесть к нему на колени", en: "Sit on his lap" }, nextStepId: "4_knees" },
          { text: { ru: "Прошептать: «Накажи меня»", en: "Whisper: “Punish me.”" }, nextStepId: "4_knees" },
          { text: { ru: "Дерзко расстегнуть его рубашку", en: "Boldly undo his shirt" }, nextStepId: "4_knees" },
        ]
      },
      "4_knees": {
        message: {
          ru: "Ты чувствуешь его твердость через ткань брюк, когда опускаешься на его бедра. Лоренцо грубо сжимает твои ягодицы, заставляя тебя выгнуться. «Ты будешь делать именно то, что я скажу, — шепчет он, прикусывая мочку твоего уха. — Сними это белье. Прямо сейчас. Я хочу видеть, как ты течешь ради меня».",
          en: "You feel his hardness through the fabric as you settle onto his thighs. Lorenzo grips you roughly, making you arch. “You’ll do exactly what I say,” he whispers, biting your earlobe. “Take it off. Right now. I want to see how badly you want me.”",
        },
        choices: [
          { text: { ru: "Выполнить его приказ, не отводя глаз", en: "Obey without breaking eye contact" }, nextStepId: "4_climax" },
          { text: { ru: "Заставить его самого снять его зубами", en: "Make him do it himself" }, nextStepId: "4_climax" },
          { text: { ru: "Попросить его быть жестче", en: "Ask him to be rougher" }, nextStepId: "4_climax" },
        ]
      },
      "4_climax": {
        message: {
          ru: "Он сбрасывает всё со своего дубового стола одним движением и укладывает тебя на спину. Его движения быстрые и властные, он не дает тебе передохнуть, заполняя тебя собой полностью. Ты чувствуешь силу его рук, фиксирующих твои запястья над головой. «Ты моя, — рычит он в экстазе. — До последней капли».\n\n*Конец демо. Продолжение — в приложении.*",
          en: "He sweeps everything off his oak desk in one motion and lays you back. His movements are fast and commanding; he gives you no time to breathe, taking you completely. You feel the strength in his hands as he pins your wrists above your head. “You’re mine,” he growls in bliss. “To the very last breath.”\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      }
    }
  },
  {
    id: "spiderman",
    titleKey: "story.2.title",
    descKey: "story.2.desc",
    accentColor: "#f87171",
    startStepId: "2_start",
    steps: {
      "2_start": {
        message: {
          ru: "Он висит вниз головой прямо перед твоим лицом, маска закатана до носа, обнажая чувственные губы. «Ночной город опасен для таких красивых девушек», — шепчет он. Его рука в перчатке осторожно касается твоей щеки, и ты чувствуешь, как между вами проскакивает искра. \n\n *Ветер доносит звуки сирен, но здесь, на высоте, время замерло.*",
          en: "He’s hanging upside down right in front of your face, mask rolled up to his nose, revealing those tempting lips. “The city at night is dangerous for someone as beautiful as you,” he whispers. His gloved hand brushes your cheek, and you feel a spark jump between you.\n\n*Sirens drift on the wind, but up here time stands still.*",
        },
        choices: [
          { text: { ru: "Поцеловать его", en: "Kiss him" }, nextStepId: "2_kiss" },
          { text: { ru: "Снять с него маску полностью", en: "Pull his mask all the way off" }, nextStepId: "2_kiss" },
          { text: { ru: "Обнять его за шею, притягивая ближе", en: "Wrap your arms around his neck and pull him closer" }, nextStepId: "2_kiss" },
        ]
      },
      "2_kiss": {
        message: {
          ru: "Поцелуй получается глубоким и жадным. Он спрыгивает на крышу, прижимая тебя к теплой кирпичной стене. Его руки в обтягивающем костюме исследуют каждый изгиб твоего тела. «Я не должен этого делать, — выдыхает он в твои губы, — но твоя близость сводит мои чувства с ума». Его ладонь находит край твоей одежды.",
          en: "The kiss turns deep and hungry. He flips onto the rooftop and presses you to warm brick. His hands, tight in the suit, explore every curve. “I shouldn’t do this,” he breathes against your lips, “but being close to you makes me lose control.” His palm finds the edge of your clothes.",
        },
        choices: [
          { text: { ru: "Помочь ему раздеться", en: "Help him undress" }, nextStepId: "2_climax" },
          { text: { ru: "«Используй паутину, чтобы связать мои руки»", en: "“Use your web to tie my hands.”" }, nextStepId: "2_climax" },
          { text: { ru: "Прижаться к нему в страстном порыве", en: "Press into him in a rush of passion" }, nextStepId: "2_climax" },
        ]
      },
      "2_climax": {
        message: {
          ru: "На краю небоскреба, под светом неоновых вывесок, ваши тела сплетаются в едином ритме. Его выносливость поражает, а каждое движение пропитано супергеройской силой и нежностью одновременно. Ты кричишь его имя в ночное небо Нью-Йорка, когда волна удовольствия накрывает вас обоих. \n\n *Звезды кажутся так близко, что до них можно дотянуться рукой.*\n\n*Конец демо. Продолжение — в приложении.*",
          en: "On the edge of a skyscraper, under neon glow, your bodies move in the same rhythm. His stamina is unreal, every motion equal parts power and tenderness. You cry his name into the New York night as pleasure hits you both at once.\n\n*The stars feel close enough to touch.*\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      }
    }
  },
  {
    id: "twilight",
    titleKey: "story.3.title",
    descKey: "story.3.desc",
    accentColor: "#c084fc",
    startStepId: "3_start",
    steps: {
      "3_start": {
        message: {
          ru: "Адриан прижимает тебя к стволу векового дуба. Его тело холодное как мрамор, но его взгляд горит неестественным голодом. «Если я коснусь тебя, я не смогу остановиться, — предупреждает он, вдыхая аромат твоей пульсирующей вены. — Твое желание пахнет слаще, чем любая кровь». \n\n *Лес вокруг окутан густым туманом.*",
          en: "Adrian pins you to the trunk of an ancient oak. His body is cold as marble, but his eyes burn with unnatural hunger. “If I touch you, I won’t be able to stop,” he warns, inhaling the scent of your pulse. “Your desire smells sweeter than any blood.”\n\n*The forest is wrapped in thick fog.*",
        },
        choices: [
          { text: { ru: "«Укуси меня... повсюду»", en: "“Bite me… everywhere.”" }, nextStepId: "3_bite" },
          { text: { ru: "Запустить руку ему под рубашку", en: "Slip your hand under his shirt" }, nextStepId: "3_bite" },
          { text: { ru: "Предложить ему свою кровь и тело", en: "Offer him your blood—and your body" }, nextStepId: "3_bite" },
        ]
      },
      "3_bite": {
        message: {
          ru: "Он издает низкий рык, и его зубы слегка прикусывают твою кожу на плече, вызывая острую вспышку наслаждения. Его ледяные руки становятся удивительно горячими, когда они скользят по твоим бедрам. «Ты станешь моей вечностью сегодня ночью», — обещает он, избавляя тебя от остатков одежды.",
          en: "A low growl escapes him; his teeth graze your shoulder, sparking a sharp thrill. His icy hands feel strangely hot as they slide along your thighs. “Tonight you’ll be my eternity,” he promises, stripping away the last of your clothes.",
        },
        choices: [
          { text: { ru: "Слиться с ним в экстазе", en: "Lose yourself with him" }, nextStepId: "3_final" },
          { text: { ru: "Почувствовать его бессмертную силу", en: "Feel his immortal strength" }, nextStepId: "3_final" },
          { text: { ru: "Утонуть в его глазах во время акта", en: "Drown in his gaze" }, nextStepId: "3_final" },
        ]
      },
      "3_final": {
        message: {
          ru: "Физическая близость с вампиром лишена границ. Это танец на грани боли и высшего блаженства. Каждое его движение выверено веками, доводя тебя до исступления. Когда наступает финал, ты чувствуешь, как сама жизнь перетекает между вами в бесконечном круговороте страсти.\n\n*Конец демо. Продолжение — в приложении.*",
          en: "Being close to a vampire has no boundaries. It’s a dance on the edge of pain and bliss. Every move is refined by centuries, pushing you to the brink. When it finally breaks, it feels like life itself is flowing between you in an endless loop of desire.\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      }
    }
  },
  {
    id: "cyberpunk",
    titleKey: "story.5.title",
    descKey: "story.5.desc",
    accentColor: "#22d3ee",
    startStepId: "5_start",
    steps: {
      "5_start": {
        message: {
          ru: "Кай отключает нейро-интерфейс, и его глаза перестают светиться синим. Он медленно подходит к тебе, и ты слышишь тихий гул его имплантов. «Я видел твои самые сокровенные файлы, — ухмыляется он, проводя пальцем по твоему бедру. — Хочешь узнать, какой у меня тактильный отклик на максимальных настройках?» \n\n *За окном летают машины, а комната залита неоновым розовым светом.*",
          en: "Kai disconnects the neuro-interface and his eyes stop glowing blue. He approaches slowly; you hear the soft hum of his implants. “I’ve seen your most private files,” he smirks, tracing a finger along your thigh. “Want to know my tactile response on max settings?”\n\n*Cars glide outside the window; the room is soaked in neon pink.*",
        },
        choices: [
          { text: { ru: "«Взломай мою систему полностью»", en: "“Hack my system completely.”" }, nextStepId: "5_hack" },
          { text: { ru: "Переключить его импланты в эро-режим", en: "Switch his implants to “ero mode”" }, nextStepId: "5_hack" },
          { text: { ru: "Оседлать его, игнорируя интерфейсы", en: "Climb onto him—ignore the interfaces" }, nextStepId: "5_hack" },
        ]
      },
      "5_hack": {
        message: {
          ru: "Он активирует стимуляцию чувств, и каждое его прикосновение умножается в твоем мозгу в десятки раз. Когда его губы находят твою грудь, ты чувствуешь не просто плоть, а идеальный алгоритм удовольствия. «Я настроил свои сенсоры так, чтобы чувствовать каждое сокращение твоих мышц», — шепчет он, погружая пальцы в твою влажность.",
          en: "He turns on sensory amplification, and every touch multiplies in your brain. When his mouth finds you, it’s not just skin — it’s a perfect pleasure algorithm. “I tuned my sensors to feel every contraction,” he whispers as his fingers slide where you’re already wanting him.",
        },
        choices: [
          { text: { ru: "Уйти в цифровую нирвану", en: "Sink into digital nirvana" }, nextStepId: "5_final" },
          { text: { ru: "Требовать физической разрядки", en: "Demand something real" }, nextStepId: "5_final" },
          { text: { ru: "Слиться с ним телом и кодом", en: "Merge with him—body and code" }, nextStepId: "5_final" },
        ]
      },
      "5_final": {
        message: {
          ru: "Вспышки неона за окном сливаются с искрами перед твоими глазами. Ритм ваших тел совпадает с битом техно, звучащим из динамиков. Кай движется с кибернетической точностью, доводя тебя до пика, который кажется мощнее любого электрического разряда. Вы оба сгораете в этом синтетическом раю.\n\n*Конец демо. Продолжение — в приложении.*",
          en: "Neon flashes outside blur into sparks behind your eyes. Your bodies match the techno beat from the speakers. Kai moves with cybernetic precision, pushing you to a peak that feels stronger than any electric surge. You both burn up in this synthetic paradise.\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      }
    }
  },
  {
    id: "noir",
    titleKey: "story.7.title",
    descKey: "story.7.desc",
    accentColor: "#94a3b8",
    startStepId: "7_start",
    steps: {
      "7_start": {
        message: {
          ru:
            "Дождь стучит по стеклу, когда ты заходишь в полутёмный кабинет. Он поднимает взгляд медленно, будто уже знает твоё имя.\n\n— Если ты здесь, значит, тебе нужна правда… или кто-то, кто красиво солжёт вместо тебя, — говорит он тихо.\n\n*Неон дрожит на жалюзи. В комнате пахнет кофе и опасными решениями.*",
          en:
            "Rain taps the window as you step into a dim office. He raises his eyes slowly, like he already knows your name.\n\n— If you’re here, you need the truth… or someone who can lie beautifully in your place, — he says softly.\n\n*Neon trembles across the blinds. The room smells like coffee and dangerous choices.*",
        },
        choices: [
          { text: { ru: "«Мне нужна защита. И молчание.»", en: "“I need protection. And silence.”" }, nextStepId: "7_protect" },
          { text: { ru: "«Угадай, зачем я пришла.»", en: "“Guess why I’m here.”" }, nextStepId: "7_guess" },
          { text: { ru: "Сесть ближе и не отводить взгляд", en: "Sit closer and hold his gaze" }, nextStepId: "7_close" },
        ],
      },
      "7_protect": {
        message: {
          ru:
            "Он встаёт и закрывает дверь на замок — щелчок звучит как обещание. Пальцы задерживаются на твоём запястье чуть дольше, чем «нужно».\n\n— Защита стоит дорого, — шепчет он. — Но ты можешь платить не деньгами.\n\n*Снаружи город шумит, а здесь — только дыхание и выбор.*",
          en:
            "He stands and locks the door — the click sounds like a promise. His fingers linger on your wrist a moment longer than they need to.\n\n— Protection is expensive, — he whispers. — But you can pay without money.\n\n*Outside, the city roars. In here—only breath and choice.*",
        },
        choices: [
          { text: { ru: "«Скажи цену. Я выдержу.»", en: "“Name your price. I can take it.”" }, nextStepId: "7_price" },
          { text: { ru: "Коснуться его ладони и не отступать", en: "Touch his hand and don’t pull away" }, nextStepId: "7_touch" },
          { text: { ru: "«Ты слишком уверен в себе.»", en: "“You’re too sure of yourself.”" }, nextStepId: "7_challenge" },
        ],
      },
      "7_guess": {
        message: {
          ru:
            "Он усмехается и делает шаг ближе — так, что границы становятся смешными.\n\n— Ты пришла за ощущением контроля, — говорит он. — И за тем, кто сможет забрать его у тебя… аккуратно.\n\n*Сигаретный дым режет свет лампы, как кинолента.*",
          en:
            "He smirks and steps closer—close enough for boundaries to feel ridiculous.\n\n— You came for the feeling of control, — he says. — And for someone who can take it from you… carefully.\n\n*Cigarette smoke slices through lamplight like a film reel.*",
        },
        choices: [
          { text: { ru: "«Попробуй.»", en: "“Try me.”" }, nextStepId: "7_challenge" },
          { text: { ru: "«Я хочу правду. Прямо сейчас.»", en: "“I want the truth. Right now.”" }, nextStepId: "7_price" },
          { text: { ru: "Отвернуться… и тут же повернуться обратно", en: "Look away… then look right back" }, nextStepId: "7_close" },
        ],
      },
      "7_close": {
        message: {
          ru:
            "Ты садишься ближе. Он смотрит на твои губы и делает вид, что это ничего не значит.\n\n— Ты опасна, — произносит он. — Потому что я уже хочу тебе верить.\n\n*Часы тикают слишком громко, будто отсчитывают секунды до ошибки.*",
          en:
            "You sit closer. He looks at your lips and pretends it means nothing.\n\n— You’re dangerous, — he says. — Because I already want to believe you.\n\n*The clock ticks too loudly, like it’s counting down to a mistake.*",
        },
        choices: [
          { text: { ru: "«Тогда ошибись.»", en: "“Then make a mistake.”" }, nextStepId: "7_touch" },
          { text: { ru: "«Сначала помоги. Потом — остальное.»", en: "“Help first. Then… the rest.”" }, nextStepId: "7_price" },
          { text: { ru: "Улыбнуться и молчать", en: "Smile and stay silent" }, nextStepId: "7_challenge" },
        ],
      },
      "7_touch": {
        message: {
          ru:
            "Его пальцы скользят по твоей руке — медленно, почти невинно. Но взгляд выдаёт всё.\n\n— Я могу быть нежным, — говорит он. — Или честным. Что ты выбираешь?\n\n*Дождь за окном усиливается. Мир становится ближе к вам двоим.*",
          en:
            "His fingers glide along your arm—slow, almost innocent. But his eyes give everything away.\n\n— I can be gentle, — he says. — Or I can be honest. What do you choose?\n\n*The rain intensifies outside. The world shrinks down to the two of you.*",
        },
        choices: [
          { text: { ru: "«Нежным.»", en: "“Gentle.”" }, nextStepId: "7_end" },
          { text: { ru: "«Честным.»", en: "“Honest.”" }, nextStepId: "7_end" },
          { text: { ru: "«И то, и другое.»", en: "“Both.”" }, nextStepId: "7_end" },
        ],
      },
      "7_price": {
        message: {
          ru:
            "Он наклоняется ближе, и голос становится почти шёпотом.\n\n— Цена — доверие, — говорит он. — Полное. На одну ночь.\n\n*Лампа бросает тёплый свет, и тень на стене выглядит слишком интимно.*",
          en:
            "He leans closer, and his voice becomes a near-whisper.\n\n— The price is trust, — he says. — Complete. For one night.\n\n*The lamp casts warm light; the shadow on the wall looks too intimate.*",
        },
        choices: [
          { text: { ru: "«Я согласна.»", en: "“I’m in.”" }, nextStepId: "7_end" },
          { text: { ru: "«Докажи, что ты достоин.»", en: "“Prove you deserve it.”" }, nextStepId: "7_challenge" },
          { text: { ru: "«Я не отдаю доверие просто так.»", en: "“I don’t give trust away for free.”" }, nextStepId: "7_protect" },
        ],
      },
      "7_challenge": {
        message: {
          ru:
            "Он улыбается — коротко, опасно — и отступает на полшага, давая тебе воздух.\n\n— Хорошо, — говорит он. — Тогда играем по твоим правилам… пока ты не попросишь мои.\n\n*Где-то далеко гремит гром. Здесь — тишина, которая жжёт.*",
          en:
            "He smiles—brief, dangerous—and steps back half a pace, giving you room to breathe.\n\n— Fine, — he says. — We’ll play by your rules… until you ask for mine.\n\n*Thunder rumbles somewhere far away. Here—silence that burns.*",
        },
        choices: [
          { text: { ru: "«Я уже прошу.»", en: "“I’m already asking.”" }, nextStepId: "7_end" },
          { text: { ru: "«Покажи, что умеешь держать себя в руках.»", en: "“Show me you can control yourself.”" }, nextStepId: "7_touch" },
          { text: { ru: "Начать заново", en: "Start over" }, nextStepId: "7_start" },
        ],
      },
      "7_end": {
        message: {
          ru:
            "Он задерживает взгляд, будто запоминает тебя навсегда.\n\n— Тогда мы договорились, — произносит он тихо. — И я не подведу.\n\n*За окном дождь превращает город в размытый свет. Внутри — всё становится слишком настоящим.*\n\n*Конец демо. Продолжение — в приложении.*",
          en:
            "He holds your gaze like he’s memorizing you forever.\n\n— Then we have a deal, — he says quietly. — And I won’t disappoint.\n\n*Outside, rain turns the city into blurred light. Inside—everything becomes too real.*\n\n*End of demo. Continue in the app.*",
        },
        choices: [],
      },
    },
  }
];