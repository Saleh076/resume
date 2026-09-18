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
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Livewire', 'Inertia.js', 'OOP', 'SOLID', 'Clean Code', 'Design Patterns'],
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'Vue.js', 'React', 'HTML', 'CSS', 'TailwindCSS', 'jQuery'],
  },
  { title: 'Database', items: ['MySQL', 'MongoDB', 'Redis', 'Neo4j', 'InfluxDB'] },
  {
    title: 'DevOps / Infrastructure',
    items: ['Docker', 'Kubernetes', 'AWS (ECS Fargate)', 'Linux', 'Nginx', 'CI/CD', 'GitLab CI'],
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
      'توسعه full-stack روی چندین پروژه بین‌المللی (استرالیا، ارمنستان، کنیا) با Laravel/PHP در بک‌اند و Vue.js/React در فرانت‌اند',
      'مدیریت فنی (Lead Backend Developer) پروژه Bee Charge با تیم سه نفره، از معماری تا دیپلوی نهایی',
      'مالکیت کامل توسعه، دیپلوی و مدیریت سرور چند پروژه  (از جمله Flitt و Bee Charge)',
      'ارتقای یک اپلیکیشن پروداکشن از Laravel 8 به Laravel 13 بدون قطعی سرویس',
      'راه‌اندازی AWS ECS Fargate و مهاجرت بک‌اند یک اپلیکیشن موبایل به زیرساخت کانتینری',
      'یادگیری و استفاده عملی از React برای نگهداری فرانت‌اند یک پروژه پس از خروج توسعه‌دهنده فرانت',
      'پیاده‌سازی چندزبانه‌سازی (انگلیسی/ارمنی) و اتصال درگاه پرداخت Idram برای یک پلتفرم بین‌المللی',
      'پیاده‌سازی REST APIها، بهینه‌سازی Query های MySQL و استفاده از Redis برای caching',
      ' تست‌ نویسی با PHPUnit', 
      'Dockerization سرویس‌ها و استقرار به شیوه CI/CD (GitLab)',
    ],
  },
  {
    role: 'کارآموز برنامه نویسی PHP',
    company: 'گروه شرکت های طرفه‌نگار',
    date: 'اسفند ۱۳۹۷ – اردیبهشت ۱۳۹۸',
    points: [
      'یادگیری مبانی PHP، Laravel، HTML، CSS و جاوااسکریپت مقدماتی به عنوان پایه ورود به پروژه‌های واقعی',
      'پیاده‌سازی یک سیستم authentication ساده (ثبت‌نام و ورود) با PHP خام و سپس بازنویسی آن با Laravel',
      'یادگیری jQuery و Bootstrap در حین کار برای توسعه رابط‌های تعاملی',
      'طراحی و پیاده‌سازی یک سیستم اتوماسیون فرضی به عنوان پروژه پایانی کارآموزی',
    ],
  },
]

const projects = [
  {
    name: 'pricemycar.com.au',
    description:
      'مارکت‌پلیس خرید خودرو در استرالیا؛ کاربران را با نزدیک‌ترین نمایندگی‌ها و بروکرها برای دریافت پیشنهاد قیمت متصل می‌کند (بدون پرداخت آنلاین)',
    stack: ['Laravel', 'PHP', 'Blade', 'jQuery'],
    role: 'عضو تیم توسعه (Junior) در بک‌اند و فرانت‌اند',
  },
  {
    name: 'leamba.ir',
    description:
      'آموزشگاه آنلاین موسیقی',
    stack: ['Laravel', 'Tailwind CSS'],
    role: 'پیاده سازی صفحات اصلی وبسایت به صورت ریسپانسیو',
  },
  {
    name: 'Bee Charge',
    description: 'سرویس شارژ سیار خودروهای برقی (اپلیکیشن اندروید)',
    stack: ['Laravel', 'PHP', 'MySQL'],
    role: 'Lead Backend Developer با تیم سه نفره — مسئول معماری، توسعه و دیپلوی/مدیریت سرور',
  },
  {
    name: 'fincar.com.au',
    description: 'محاسبه‌گر و ثبت درخواست Novated Lease برای مشتریان استرالیایی',
    stack: ['Laravel', 'React'],
    role: 'عضو تیم بک‌اند؛ یادگیری React برای نگهداری فرانت‌اند پس از خروج توسعه‌دهنده فرانت',
  },
  {
    name: 'bainovaco.com',
    description: 'وب‌سایت یک شرکت مشاوره و تکنولوژی',
    stack: ['Express.js', 'React'],
    role: 'نگهداری و توسعه کد پیشین؛ چندزبانه‌سازی (انگلیسی/ارمنی) و اتصال درگاه پرداخت Idram',
  },
  {
    name: 'Twiva',
    description: 'پلتفرم اقتصاد کریتورها در آفریقا (اپلیکیشن موبایل)',
    stack: ['AWS ECS Fargate'],
    role: 'عضو تیم بک‌اند؛ راه‌اندازی AWS ECS Fargate برای مهاجرت به زیرساخت کانتینری',
  },
  {
    name: 'flitt.it',
    description: 'پلتفرم حمل‌ونقل آنلاین وسایل حجیم منزل و باغ (اپلیکیشن موبایل)',
    stack: ['Laravel', 'PHP', 'MySQL'],
    role: 'مالکیت کامل بک‌اند و سرور؛ ارتقای پروژه از Laravel 8 به Laravel 13',
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
          <li>• عضویت در تیم <bdi dir="ltr">ACM Tehran ۲۰۱۸</bdi> دانشگاه</li>
        </ul>
      </section>
      <section>
        <h2 class="side-title"><Languages />زبان</h2>
        <div class="mt-4">
          <h3 class="font-extrabold">انگلیسی</h3>
          <p class="mt-2 text-sm" dir="ltr">Reading: Advanced | Writing: Upper-Intermediate</p>
          <p class="mt-2 text-sm" dir="ltr">Listening: Upper-Intermediate | Speaking: Upper-Intermediate</p>
        </div>
      </section>
    </aside>
    <section class="space-y-8 lg:order-1">
      <section>
        <h2 class="section-title"><UsersRound />درباره‌ی من</h2>
        <p class="mt-5 text-lg leading-9 md:text-xl">
          توسعه‌دهنده فول استک Laravel/Vue با چند سال تجربه در توسعه و نگهداری اپلیکیشن‌های وب و APIها.
          <br />تجربه در استقرار اپلیکیشن‌ها و و مدیریت و نگهداری سرورها.
          <br /> گرایش به طراحی کد تمیز و معماری توسعه پذیر.
          <br /> علاقه مند به پیشرفت و یادگیری و کسب تجربه‌های جدید.
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
            نقش: {{ project.role }}
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