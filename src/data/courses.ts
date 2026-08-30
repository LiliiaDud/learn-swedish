export type Course = {
  id: string;
  title: string;
  description: string;
  level?: string;
  href: string;
  icon: string;

  about: string;

  audience: string;

  program: string[];

  format: string;

  schedule: string;

  price?: string;
};

export const courses: Course[] = [
  {
    id: "adults",
    title: "Курси для дорослих",
    description:
      "Системне вивчення шведської від початкового до впевненого рівня.",
    level: "A1 — B2",
    href: "/courses/adults",
    icon: "📚",

    about:
      "Курс допоможе вам системно вивчати шведську мову, розвивати словниковий запас, граматику та навички живого спілкування.",

    audience:
      "Ви хочете впевнено використовувати шведську у повсякденному житті, роботі та спілкуванні у Швеції.",

    program: [
      "Граматика та структура шведської мови",
      "Розширення словникового запасу",
      "Розмовна практика",
      "Аудіювання та вимова",
      "Практичні ситуації з повсякденного життя",
    ],

    format: "Онлайн-заняття у невеликих групах",

    schedule: "Понеділок, середа, п'ятниця о 20:00",

    price: "3000 SEK / 3 місяці",
  },
  {
    id: "kids",
    title: "Для дітей та підлітків",
    description: "Шведська через гру, спілкування та практичні ситуації.",
    href: "/courses/kids",
    icon: "🌱",
  },
  {
    id: "conversation",
    title: "Розмовні курси",
    description:
      "Більше практики, живого спілкування та впевненості у розмові.",
    href: "/courses/conversation",
    icon: "💬",
  },
  {
    id: "individual",
    title: "Індивідуальні заняття",
    description: "Персональна програма навчання відповідно до ваших цілей.",
    href: "/courses/individual",
    icon: "✨",
  },
  {
    id: "exam",
    title: "Підготовка до іспитів",
    description: "Підготовка до мовних іспитів та важливих навчальних цілей.",
    href: "/courses/exam",
    icon: "🎓",
  },
  {
    id: "fika",
    title: "Шведська Fika",
    description: "Неформальна практика розмовної шведської за чашкою кави.",
    href: "/courses/fika",
    icon: "☕",
  },
  {
    id: "book-club",
    title: "Читацький клуб",
    description: "Читаємо шведські книги в оригіналі та обговорюємо їх разом.",
    href: "/courses/book-club",
    icon: "📖",
  },
  {
    id: "saturday",
    title: "Lördagsstudier",
    description: "Самостійне навчання у колі однодумців із підтримкою ментора.",
    href: "/courses/saturday",
    icon: "☀️",
  },
];
