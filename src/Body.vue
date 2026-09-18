<script setup lang="ts">
import {
  BriefcaseBusiness,
  Code2,
  Folder,
  GraduationCap,
  Languages,
  Star,
  UsersRound,
} from '@lucide/vue'

const skills = [
  { title: 'Backend', items: ['PHP', 'Laravel', 'OOP', 'SOLID', 'Clean Code'] },
  { title: 'Frontend', items: ['JavaScript', 'Vue.js', 'HTML', 'CSS', 'TailwindCSS', 'jQuery'] },
  { title: 'Database', items: ['MySQL', 'MongoDB', 'Redis'] },
  {
    title: 'DevOps / Infrastructure',
    items: ['Docker', 'Linux', 'Kubernetes', 'AWS', 'GitLab CI'],
  },
  { title: 'Messaging / Testing', items: ['RabbitMQ', 'PHPUnit'] },
  { title: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
]
const experiences = [
  {
    role: 'برنامه نویس فول استک',
    company: 'شرکت پیدایش زمان',
    date: 'آبان ۱۴۰۰ – اکنون',
    points: [
      'توسعه و نگهداری سرویس‌های وب مبتنی بر Laravel و MySQL',
      'پیاده‌سازی APIهای REST و توسعه قابلیت‌های جدید محصول',
      'بهینه‌سازی Queryهای MySQL و کاهش زمان پاسخ بخش‌های پرترافیک',
      'استفاده از Redis برای caching و بهبود performance',
      'طراحی و پیاده‌سازی تست‌های PHPUnit',
      'Dockerization سرویس‌ها و همکاری در CI/CD با GitLab',
    ],
  },
  {
    role: 'کارآموز برنامه نویسی PHP',
    company: 'گروه شرکت های طرفه‌نگار',
    date: 'اسفند ۱۳۹۷ – اردیبهشت ۱۳۹۸',
    points: [
      'آشنایی و کار با فریم‌ورک‌های PHP و مفاهیم پایه توسعه وب',
      'بهره‌گیری از ابزارهای کنترل نسخه و محیط‌های توسعه',
    ],
  },
]
const projects = [
  {
    name: 'pricemycar.com.au',
    description: 'پلتفرم مقایسه و قیمت‌گذاری خودرو در استرالیا',
    stack: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    name: 'carexpert.com.au/car-chooser',
    description: 'ابزار انتخاب و مقایسه خودرو',
    stack: ['Laravel', 'PHP', 'Vue.js'],
  },
  { name: 'leamba.ir', description: 'پلتفرم خدمات آنلاین', stack: ['Laravel', 'PHP', 'MySQL'] },
  {
    name: 'Bee Charge',
    description: 'سرویس مدیریت و شارژ خودروهای برقی',
    stack: ['Laravel', 'PHP', 'Redis'],
  },
]
</script>

<template>
  <div class="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-12" dir="rtl">
    <aside class="space-y-7 lg:order-2">
      <section class="rounded-xl bg-[#eef6f2] px-5 py-5">
        <h2 class="side-title"><Code2 />مهارت‌های فنی</h2>
        <div v-for="skill in skills" :key="skill.title" class="mt-5">
          <h3 class="text-[15px] font-extrabold" dir="ltr">{{ skill.title }}</h3>
          <div class="mt-2 flex flex-wrap gap-2" dir="ltr">
            <span v-for="item in skill.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </section>
      <section>
        <h2 class="side-title"><BriefcaseBusiness />سوابق کاری</h2>
        <div class="relative mt-4 mr-3 border-r-2 border-[#168159] pr-6">
          <div class="timeline-dot top-1"></div>
          <div class="timeline-dot top-31"></div>
          <article class="pb-7">
            <h3 class="font-extrabold">گروه شرکت‌های طرفه‌نگار</h3>
            <p class="mt-2 text-sm">اسفند ۱۳۹۷ – اردیبهشت ۱۳۹۸</p>
            <p class="mt-2 font-bold">کارآموز برنامه نویسی PHP</p>
          </article>
          <article>
            <h3 class="font-extrabold">شرکت پیدایش زمان</h3>
            <p class="mt-2 text-sm">آبان ۱۴۰۰ – اکنون</p>
            <p class="mt-2 font-bold">برنامه نویس فول استک Laravel</p>
          </article>
        </div>
      </section>
      <section>
        <h2 class="side-title"><GraduationCap />سوابق تحصیلی</h2>
        <div class="mt-4 leading-8">
          <h3 class="font-extrabold">کارشناسی مهندسی کامپیوتر</h3>
          <p>گرایش نرم‌افزار</p>
          <p>دانشگاه بین‌المللی امام خمینی (ره) قزوین</p>
          <p>۱۳۹۴–۱۳۹۸</p>
        </div>
      </section>
      <section>
        <h2 class="side-title"><UsersRound />فعالیت‌های علمی</h2>
        <ul class="mt-4 space-y-2 text-sm">
          <li>• عضویت در تیم المپیاد دانشگاه (زمستان ۱۳۹۸)</li>
          <li>• عضویت در تیم <bdi dir="ltr">ACM Tehran 2018</bdi> دانشگاه</li>
        </ul>
      </section>
      <section>
        <h2 class="side-title"><Languages />زبان</h2>
        <div class="mt-4">
          <h3 class="font-extrabold">انگلیسی</h3>
          <p class="mt-2 text-sm" dir="ltr">Reading: Good | Writing: Intermediate</p>
          <p class="mt-2 text-sm" dir="ltr">Listening: Intermediate | Speaking: Intermediate</p>
        </div>
      </section>
    </aside>
    <section class="space-y-8 lg:order-1">
      <section>
        <h2 class="section-title"><UsersRound />خلاصه حرفه‌ای</h2>
        <p class="mt-5 text-lg leading-9 md:text-xl">
          توسعه‌دهنده PHP/Laravel با چند سال تجربه در توسعه و نگهداری اپلیکیشن‌های وب.<br />دارای
          تجربه کار با MySQL، Redis، Docker، PHPUnit و سرویس‌های مبتنی بر Linux<br />و CI/CD.
          علاقه‌مند به طراحی کد تمیز، معماری قابل نگهداری و بهینه‌سازی عملکرد.
        </p>
      </section>
      <section>
        <h2 class="section-title"><BriefcaseBusiness />تجربه کاری</h2>
        <article
          v-for="experience in experiences"
          :key="experience.role"
          class="border-b border-[#bfddd2] px-3 py-3 last:border-b-0"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="text-lg font-black">{{ experience.role }}</h3>
            <span>{{ experience.date }}</span>
          </div>
          <h4 class="mt-1 text-base font-bold">{{ experience.company }}</h4>
          <ul class="mt-3 space-y-1.5 text-[15px] leading-7">
            <li
              v-for="point in experience.points"
              :key="point"
              class="pr-4 before:relative before:-right-4 before:ml-[-4px] before:text-[#09804e] before:content-['•']"
            >
              {{ point }}
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h2 class="section-title"><Folder />پروژه‌های کاری</h2>
        <article
          v-for="project in projects"
          :key="project.name"
          class="border-b border-[#bfddd2] px-3 py-3"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="font-extrabold" dir="ltr">{{ project.name }}</h3>
            <div class="flex gap-2" dir="ltr">
              <span v-for="item in project.stack" :key="item" class="tag text-[11px]">{{ item }}</span>
            </div>
          </div>
          <p class="mt-1 text-sm">{{ project.description }}</p>
          <p class="mt-1 text-sm">
            نقش: توسعه و بهینه‌سازی backend و یکپارچه‌سازی سرویس‌ها
            <span class="font-bold">|</span> تکنولوژی‌ها: Laravel, PHP, MySQL, Redis
          </p>
        </article>
      </section>
      <section v-if="false">
        <h2 class="section-title"><GraduationCap />پروژه‌های دانشگاهی و تمرینی (خلاصه)</h2>
        <p class="mt-4 font-medium" dir="ltr">C#, Java, Python, C++, C#, Laravel</p>
        <p class="mt-3 text-sm">
          چند نمونه از پروژه‌ها: دفترچه تلفن (C)، مدیریت کافی‌نت (Java)، رسم نمودار (Python) و ...
        </p>
      </section>
    </section>
  </div>
</template>