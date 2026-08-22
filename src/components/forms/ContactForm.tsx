"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./ContactForm.module.scss";

const schema = z.object({
  name: z.string().min(2, "Введіть ім’я"),

  phone: z.string().min(8, "Вкажіть телефон"),

  email: z.email("Некоректний email"),

  course: z.string().min(1, "Оберіть напрямок"),

  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
        <select {...register("course")} defaultValue="">
          <option value="" disabled>
            Що вас цікавить?
          </option>
          <option>Курси для дорослих</option>
          <option>Курси для дітей</option>
          <option>Розмовні курси</option>
          <option>Читацький клуб</option>
          <option>Підготовка до іспитів</option>
          <option>Індивідуальні заняття</option>
          <option>Потрібна консультація</option>
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
