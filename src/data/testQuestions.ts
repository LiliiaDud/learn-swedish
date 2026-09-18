export type TestLevel = "A1" | "A2" | "B1" | "B2";

export type TestQuestion = {
  id: number;
  level: TestLevel;
  text?: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    level: "A1",
    question: "Jag ___ svenska varje dag.",
    options: ["studerar", "studera", "studerat", "studerade"],
    correctAnswer: 0,
  },

  {
    id: 2,
    level: "A1",
    question: "Hon ___ från Ukraina.",
    options: ["är", "har", "blir", "gör"],
    correctAnswer: 0,
  },

  {
    id: 3,
    level: "A1",
    question: "Vilken mening har rätt ordföljd?",
    options: [
      "Jag idag arbetar hemma.",
      "Idag arbetar jag hemma.",
      "Idag jag arbetar hemma.",
      "Arbetar idag jag hemma.",
    ],
    correctAnswer: 1,
  },

  {
    id: 4,
    level: "A1",
    question: "Jag har ___ bil.",
    options: ["en", "ett", "ett en", "en ett"],
    correctAnswer: 0,
  },

  {
    id: 5,
    level: "A1",
    question: 'Vad betyder "Jag är hungrig"?',
    options: [
      "Я втомився / втомилася.",
      "Я голодний / голодна.",
      "Мені холодно.",
      "Я зайнятий / зайнята.",
    ],
    correctAnswer: 1,
  },

  {
    id: 6,
    level: "A2",
    question: "Igår ___ jag till Stockholm.",
    options: ["åker", "åkte", "åkt", "åka"],
    correctAnswer: 1,
  },

  {
    id: 7,
    level: "A2",
    question: "Jag har ___ den här filmen tidigare.",
    options: ["ser", "såg", "sett", "se"],
    correctAnswer: 2,
  },

  {
    id: 8,
    level: "A2",
    question: "Jag måste ___ till jobbet nu.",
    options: ["går", "gick", "gå", "gått"],
    correctAnswer: 2,
  },

  {
    id: 9,
    level: "A2",
    question: "Jag bor ___ Sverige.",
    options: ["på", "i", "till", "från"],
    correctAnswer: 1,
  },

  {
    id: 10,
    level: "A2",
    question: "När jag kommer hem, ___ jag middag.",
    options: ["lagar", "lagade", "laga", "lagat"],
    correctAnswer: 0,
  },

  {
    id: 11,
    level: "B1",
    question: "Jag har bott i Sverige ___ 2023.",
    options: ["för", "sedan", "i", "från"],
    correctAnswer: 1,
  },

  {
    id: 12,
    level: "B1",
    question: "Om jag har tid i kväll, ___ jag dig.",
    options: ["ringer", "ringde", "ringa", "ringt"],
    correctAnswer: 0,
  },

  {
    id: 13,
    level: "B1",
    question: "Vilken mening är korrekt?",
    options: [
      "Jag vet inte var bor hon.",
      "Jag vet inte var hon bor.",
      "Jag vet inte var bor.",
      "Jag vet inte hon var bor.",
    ],
    correctAnswer: 1,
  },

  {
    id: 14,
    level: "B1",
    question: "Eftersom jag var sjuk, ___ jag hemma hela dagen.",
    options: ["stannar", "stannade", "stanna", "stannat"],
    correctAnswer: 1,
  },

  {
    id: 15,
    level: "B1",
    text: "Anna började lära sig svenska för två år sedan. I början tyckte hon att det var svårt att förstå människor när de pratade snabbt. Nu förstår hon mycket mer, men hon tycker fortfarande att det är svårt att prata svenska på jobbet.",
    question: "Vad tycker Anna fortfarande är svårt?",
    options: [
      "Att läsa svenska.",
      "Att skriva svenska.",
      "Att prata svenska på jobbet.",
      "Att förstå människor.",
    ],
    correctAnswer: 2,
  },

  {
    id: 16,
    level: "B2",
    question: "Trots att det regnade mycket, ___ vi gå ut.",
    options: [
      "bestämde oss för att",
      "bestämde vi för att",
      "bestämde oss att för",
      "vi bestämde att",
    ],
    correctAnswer: 0,
  },

  {
    id: 17,
    level: "B2",
    question: "Om jag hade vetat det tidigare, ___ jag ha gjort annorlunda.",
    options: ["skulle", "ska", "hade", "skulle ha"],
    correctAnswer: 3,
  },

  {
    id: 18,
    level: "B2",
    question:
      "Hon har bott i Sverige länge, ___ hon fortfarande ibland har svårt att förstå vissa dialekter.",
    options: ["därför", "eftersom", "även om", "trots"],
    correctAnswer: 2,
  },

  {
    id: 19,
    level: "B2",
    text: "Många människor väljer idag att arbeta hemifrån åtminstone en del av veckan. För vissa innebär det större frihet och mindre tid som går åt till att pendla. Samtidigt kan det vara svårare att skilja mellan arbete och fritid när arbetsplatsen finns hemma.",
    question: "Vilken nackdel med att arbeta hemifrån nämns i texten?",
    options: [
      "Man måste pendla längre.",
      "Man får mindre frihet.",
      "Det kan vara svårt att skilja arbete från fritid.",
      "Man arbetar färre timmar.",
    ],
    correctAnswer: 2,
  },

  {
    id: 20,
    level: "B2",
    question:
      '"Trots att hon hade ont om tid lyckades hon slutföra arbetet i tid." Vad betyder meningen?',
    options: [
      "Hon hade gott om tid och avslutade arbetet tidigt.",
      "Hon hade lite tid men hann ändå avsluta arbetet i tid.",
      "Hon hade inte tid och avslutade inte arbetet.",
      "Hon började arbeta sent eftersom hon hade mycket tid.",
    ],
    correctAnswer: 1,
  },
];
