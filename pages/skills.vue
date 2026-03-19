<script setup>
defineI18nRoute({
  paths: {
    en: '/skills',
    id: '/keahlian'
  }
})
const localePath = useLocalePath()

const skillsByRole = useSkill().skillsByRole
</script>
<template>
  <section class="relative w-full py-5 lg:py-8 md:py-8 sm:py-8 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]"
      style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 50px 50px;">
    </div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex justify-center mb-8">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('skills.badge') }}</span>
        </div>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 leading-tight">
        <span class="text-white">{{ $t('skills.titlePrefix') }}</span>
        <span class="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{{
          $t('skills.title') }}</span>
      </h1>
      <p class="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        {{ $t('skills.description') }}
      </p>
       <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muliadyputra20@gmail.com" target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1">
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          <span
            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="relative text-sm">{{ $t('skills.getInTouchBadge') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg"
            class="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <NuxtLink :to="localePath('portfolio')"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-gray-300 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200">
          {{ $t('viewPortfolio') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
       </div>
    </div>
  </section>
  <section class="relative w-full py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="text-center mb-10 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{{ $t('skills.categoriesTitle') }}</h2>
        <p class="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">{{ $t('skills.descriptionShort') }}</p>
      </div>
      <div class="space-y-24">
        <div v-for="(skills, role) in skillsByRole" :key="role" class="flex flex-col lg:flex-row items-center gap-12">
        </div>
      </div>
    </div>
  </section>
</template>