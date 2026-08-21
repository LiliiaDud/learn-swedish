import {
  MessageCircle,
  GraduationCap,
  Baby,
  UserRound,
  FileCheck,
  Coffee,
} from "lucide-react";

export const courseFormats = [
  {
    id: 1,
    title: "Розмовні курси",
    description: "Практика живої шведської",
    icon: MessageCircle,
    href: "/courses/conversation",
  },
  {
    id: 2,
    title: "Курси для початківців",
    description: "Рівень A1–A2",
    icon: GraduationCap,
    href: "/courses/adults",
  },
  {
    id: 3,
    title: "Курси для дітей",
    description: "Від 7 до 15 років",
    icon: Baby,
    href: "/courses/kids",
  },
  {
    id: 4,
    title: "Індивідуальні заняття",
    description: "Персональна програма",
    icon: UserRound,
    href: "/courses/individual",
  },
  {
    id: 5,
    title: "Підготовка до іспитів",
    description: "SFI • SAS • TISUS",
    icon: FileCheck,
    href: "/courses/exams",
  },
  {
    id: 6,
    title: "Шведська Fika",
    description: "Неформальний мовний клуб",
    icon: Coffee,
    href: "/courses/fika",
  },
];
