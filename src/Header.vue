<script setup lang="ts">
import { CalendarDays, Code2, Mail, MapPin, Phone, ShieldCheck } from '@lucide/vue'
</script>

<template>
  <header
    class="grid items-start gap-8 border-b border-[#c6ddd4] pb-8 lg:grid-cols-[1fr_1.25fr_1fr] lg:border-0 lg:pb-3"
    dir="ltr"
  >
    <div class="hidden items-center justify-start text-[#08643f] lg:flex">
      <Code2 :size="104" :stroke-width="1.35" />
    </div>
    <div class="text-center lg:text-left" dir="rtl">
      <h1 class="text-4xl font-black tracking-tight text-[#062b2a] md:text-6xl">صالح شکاری</h1>
      <p class="mt-2 text-xl font-bold tracking-wide text-[#07633e] md:text-2xl" dir="ltr">
        PHP / Laravel Backend Developer
      </p>
    </div>
    <address
      class="grid justify-center gap-3 not-italic text-base leading-none lg:justify-start lg:border-l-2 lg:border-[#08754a] lg:pl-10"
    >
      <a class="contact" href="mailto:salehdvp@gmail.com"><Mail :size="19" />salehdvp@gmail.com</a
      ><a class="contact" href="tel:+989109598609"><Phone :size="19" />۰۹۱۰ ۹۵۹ ۸۶۰۹</a
      ><span class="contact"><MapPin :size="19" />اردبیل</span
      ><span class="contact"><CalendarDays :size="19" />۱۳۷۶/۰۴/۰۱</span
      ><span class="contact"><ShieldCheck :size="19" />پایان خدمت</span>
    </address>
  </header>
</template>
