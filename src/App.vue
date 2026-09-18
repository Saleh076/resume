<script setup lang="ts">
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Folder,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
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
  <main class="min-h-screen bg-[#fbfcfa] text-[#0b2234]">
    <div class="mx-auto max-w-[1450px] px-5 py-10 md:px-10 lg:py-14">
      <header
        class="grid items-start gap-8 border-b border-[#c6ddd4] pb-8 lg:grid-cols-[1fr_1.25fr_1fr] lg:border-0 lg:pb-3"
      >
        <div class="hidden items-center justify-start text-[#08643f] lg:flex">
          <Code2 :size="104" :stroke-width="1.35" />
        </div>
        <div class="text-center lg:text-right">
          <h1 class="text-4xl font-black tracking-tight text-[#062b2a] md:text-6xl">صالح شکاری</h1>
          <p class="mt-2 text-xl font-bold tracking-wide text-[#07633e] md:text-2xl" dir="ltr">
            PHP / Laravel Backend Developer
          </p>
        </div>
        <address
          class="grid justify-center gap-3 not-italic text-base leading-none lg:justify-start lg:border-r-2 lg:border-[#08754a] lg:pr-10"
        >
          <a class="contact" href="mailto:salehdvp@gmail.com"
            ><Mail :size="19" />salehdvp@gmail.com</a
          ><a class="contact" href="tel:+989109598609"><Phone :size="19" />0910 959 8609</a
          ><span class="contact"><MapPin :size="19" />اردبیل</span
          ><span class="contact"><CalendarDays :size="19" />01/04/1376</span
          ><span class="contact"><GraduationCap :size="19" />پایان خدمت</span>
        </address>
      </header>
      <div class="mt-9 grid gap-8 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-12" dir="rtl">
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
                  <span v-for="item in project.stack" :key="item" class="tag text-[11px]">{{
                    item
                  }}</span>
                </div>
              </div>
              <p class="mt-1 text-sm">{{ project.description }}</p>
              <p class="mt-1 text-sm">
                نقش: توسعه و بهینه‌سازی backend و یکپارچه‌سازی سرویس‌ها
                <span class="font-bold">|</span> تکنولوژی‌ها: Laravel, PHP, MySQL, Redis
              </p>
            </article>
          </section>
          <section>
            <h2 class="section-title"><GraduationCap />پروژه‌های دانشگاهی و تمرینی (خلاصه)</h2>
            <p class="mt-4 font-medium" dir="ltr">C#, Java, Python, C++, C#, Laravel</p>
            <p class="mt-3 text-sm">
              چند نمونه از پروژه‌ها: دفترچه تلفن (C)، مدیریت کافی‌نت (Java)، رسم نمودار (Python) و
              ...
            </p>
          </section>
          <section class="grid gap-7 md:grid-cols-2">
            <div>
              <h2 class="section-title"><Star />دستاوردها و نکات تکمیلی</h2>
              <ul class="mt-4 text-sm leading-7">
                <li>علاقه‌مند به یادگیری تکنولوژی‌های جدید</li>
                <li>تجربه کار با سیستم‌های لینوکس و سرویس‌های ابری</li>
                <li>تلاش برای نوشتن کد تمیز و قابل نگهداری</li>
              </ul>
            </div>
            <div>
              <h2 class="section-title text-base">
                <Languages />دوره‌های آموزشی و ابزارهای مورد علاقه
              </h2>
              <p class="mt-4 text-sm leading-7" dir="ltr">
                Laravel, Vue.js, Docker, Kubernetes<br />Clean Code & SOLID<br />System Design
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  </main>
</template>

<style>
@import 'tailwindcss';
@font-face {
  font-family: 'Vazirmatn';
  src: local('Vazirmatn'), local('Tahoma');
}
:root {
  font-family: Vazirmatn, Tahoma, Arial, sans-serif;
  color-scheme: light;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  direction: rtl;
  background: #fbfcfa;
}
.contact {
  display: flex;
  direction: ltr;
  align-items: center;
  gap: 0.85rem;
  color: #0b2234;
  text-decoration: none;
}
.contact svg {
  color: #08754a;
}
.section-title,
.side-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid #168159;
  padding-bottom: 0.55rem;
  color: #075e3c;
  font-size: 1.55rem;
  font-weight: 900;
}
.section-title svg,
.side-title svg {
  flex: none;
  border-radius: 999px;
  background: #08754a;
  padding: 0.4rem;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
}
.side-title {
  font-size: 1.35rem;
}
.tag {
  border-radius: 999px;
  background: #dcebe5;
  padding: 0.32rem 0.85rem;
  color: #083a3c;
  font-size: 0.82rem;
  line-height: 1.15;
}
.timeline-dot {
  position: absolute;
  right: -0.43rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 999px;
  background: #168159;
}
.top-31 {
  top: 7.75rem;
}
@media (max-width: 640px) {
  .section-title {
    font-size: 1.25rem;
  }
  .section-title svg,
  .side-title svg {
    width: 2.15rem;
    height: 2.15rem;
  }
}
</style>
