"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./ContactForm.module.scss";

const schema = z.object({
  name: z.string().trim().min(2, "Введіть ім’я"),

  phone: z.string().trim().min(8, "Вкажіть телефон"),

  email: z.email("Некоректний email"),

  course: z.string().min(1, "Оберіть напрямок"),

  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const courseOptions = [
  {
    value: "adults",
    label: "Курси для дорослих",
  },
  {
    value: "kids",
    label: "Курси для дітей",
  },
  {
    value: "conversation",
    label: "Розмовні курси",
  },
  {
    value: "book-club",
    label: "Читацький клуб",
  },
  {
    value: "exam",
    label: "Підготовка до іспитів",
  },
  {
    value: "individual",
    label: "Індивідуальні заняття",
  },
  {
    value: "fika",
    label: "Fika",
  },
  {
    value: "saturday",
    label: "Самостійне навчання",
  },
  {
    value: "consultation",
    label: "Потрібна консультація",
  },
];

export default function ContactForm() {
  const searchParams = useSearchParams();

  const selectedCourse = searchParams.get("course");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: {
      course: "",
    },
  });

  useEffect(() => {
    const isValidCourse = courseOptions.some(
      (option) => option.value === selectedCourse,
    );

    if (isValidCourse) {
      setValue("course", selectedCourse as string);
    }
  }, [selectedCourse, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);

    alert("Дякуємо! Ми зв'яжемося з вами протягом 24 годин.");

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input {...register("name")} placeholder="Ім’я" />

        <span>{errors.name?.message}</span>
      </div>

      <div>
        <input {...register("phone")} placeholder="Телефон / Telegram" />

        <span>{errors.phone?.message}</span>
      </div>

      <div>
        <input {...register("email")} placeholder="Email" />

        <span>{errors.email?.message}</span>
      </div>

      <div>
        <select {...register("course")}>
          <option value="" disabled>
            Що вас цікавить?
          </option>

          {courseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span>{errors.course?.message}</span>
      </div>

      <div>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Ваше повідомлення (необов’язково)"
        />
      </div>

      <button type="submit">Хочу навчатися</button>
    </form>
  );
}
