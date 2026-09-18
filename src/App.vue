<script setup lang="ts">
import Home from './Home.vue'
</script>

<template>
  <main class="min-h-screen bg-[#fbfcfa] text-[#0b2234]">
    <div class="mx-auto max-w-[1450px] px-5 py-10 md:px-10 lg:py-14">
      <Home />
    </div>
  </main>
</template>

<style>
@import 'tailwindcss';
@font-face {
  font-family: 'Vazirmatn';
  src: url('/fonts/Vazirmatn-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Vazirmatn';
  src: url('/fonts/Vazirmatn-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Vazirmatn';
  src: url('/fonts/Vazirmatn-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
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
