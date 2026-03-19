<script setup lang="ts">
defineI18nRoute({
  paths: {
    en: '/',
    id: '/'
  }
})
const { locale } = useI18n()
const localePath = useLocalePath()
const socialLinks = useSocialLinks()
const { skills } = useSkill()
const { services } = useData()
const featuredSkills = computed(() => {
  return skills.value.filter(skill => skill.featured)
})
const rolesId = ['Web Developer', 'UI/UX Designer', 'Virtual Assistant', 'Frontend Engineer']
const rolesEn = ['Web Developer', 'UI/UX Designer', 'Virtual Assistant', 'Frontend Engineer']
const defaultRoles = computed(() => {
  return locale.value === 'id' ? rolesId : rolesEn
})
const currentRoleIndex = ref(0)
const displayedRole = ref('')
const isDeleting = ref(false)
const typingSpeed = ref(120)
let typingTimer: ReturnType<typeof setTimeout>
const typeEffect = () => {
  const currentRole = defaultRoles.value[currentRoleIndex.value] ?? ''
  if (isDeleting.value) {
    displayedRole.value = currentRole.substring(0, displayedRole.value.length - 1)
    typingSpeed.value = 60
    if (displayedRole.value === '') {
      isDeleting.value = false
      currentRoleIndex.value = (currentRoleIndex.value + 1) % defaultRoles.value.length
      typingSpeed.value = 400
    }
  } else {
    displayedRole.value = currentRole.substring(0, displayedRole.value.length + 1)
    typingSpeed.value = 120
    if (displayedRole.value === currentRole) {
      typingSpeed.value = 2000
      isDeleting.value = true
    }
  }
  typingTimer = setTimeout(typeEffect, typingSpeed.value)
}
onMounted(() => {
  typingTimer = setTimeout(typeEffect, 800)
})

onUnmounted(() => {
  clearTimeout(typingTimer)
})
</script>
<template>
  <section id="hero" class="relative w-full py-5 lg:py-8 md:py-8 sm:py-8 overflow-hidden">
    <div
      class="grid lg:grid-cols-2 gap-12 lg:gap-6 sm:gap-7 md-gap-7 items-center w-full px-6 sm:px-8 lg:px-10 pt-20 lg:pt-50">
      <div class="order-2 lg:order-1 text-center lg:text-left px-3 sm:px-6 lg:px-6 pt-3 item-stretch">
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-7 cursor-default">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          </span>
          <span class="text-emerald-400 text-sm font-semibold tracking-wide">{{ $t('availableForWork') }}</span>
        </div>
        <p class="text-blue-400 font-semibold text-xl sm:text-2xl mb-1 tracking-wide">
          {{ $t('hero.hiThere') }}
        </p>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-3">
          <span class="text-gray-300 font-semibold">I'm </span><span class="text-white">Muliady </span><span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400">Putra</span>
        </h1>
        <div class="flex items-center gap-2 justify-center lg:justify-start mb-5">
          <p class="text-lg sm:text-xl text-gray-400 font-medium min-h-[1.75rem]">
            {{ $t('hero.iamInto') }}&nbsp;<span class="text-blue-400 font-semibold">{{ displayedRole }}</span><span
              class="typing-cursor">|</span>
          </p>
        </div>
        <div class="flex justify-center lg:justify-start mb-5">
          <NuxtLink :to="localePath('about')"
            class="group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5">
            <span
              class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative whitespace-nowrap">{{ $t('about.label') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="relative h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div class="flex justify-center lg:justify-start">
          <div class="flex gap-2">
            <template v-for="social in socialLinks" :key="social.id">
              <a v-if="social.url" :href="String(social.url)" target="_blank"
                class="group flex flex-col items-center gap-1.5 cursor-pointer" :title="social.name">
                <div
                  class="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  <!-- GitHub -->
                  <svg v-if="social.name === 'GitHub'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <!-- Instagram -->
                  <svg v-else-if="social.name === 'Instagram'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <!-- WhatsApp -->
                  <svg v-else-if="social.name === 'WhatsApp'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <!-- Telegram -->
                  <svg v-else-if="social.name === 'Telegram'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <svg v-else-if="social.name === 'Email'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </div>
              </a>
            </template>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2 flex justify-center lg:justify-end py-3 sm:py-5 lg:py-5 px-3 sm:px-6 lg:px-6 pt-1 item-stretch">
        <div class="relative">
          <div class="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-spin-slow">
          </div>
          <div class="absolute inset-[-16px] rounded-full border border-blue-400/10 animate-spin-reverse"></div>
          <div class="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/20 blur-2xl">
          </div>
          <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[360px] xl:h-[360px]">
            <div class="absolute inset-0 rounded-full p-[3px]">
              <div class="w-full h-full rounded-full p-1">
                <div class="w-full h-full rounded-full overflow-hidden">
                  <NuxtImg src="/foto.png" alt="Muliady Putra - Web Developer" class="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute -top-0.5 -left-0.5 sm:-top-2 sm:-left-2 bg-[#111827] border border-white/10 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl px-1 py-0.5 sm:px-3 sm:py-2 flex items-center gap-0.5 sm:gap-2 backdrop-blur-sm animate-float">
            <div
              class="w-3 h-3 sm:w-7 sm:h-7 rounded sm:rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 sm:h-4 sm:w-4 text-blue-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-white font-bold text-[6px] sm:text-xs leading-none whitespace-nowrap">3+</p>
              <p class="text-gray-500 text-[4px] sm:text-[10px] whitespace-nowrap">{{ $t('experienceyears') }}</p>
            </div>
          </div>
          <div
            class="absolute -bottom-0.5 -left-0.5 sm:-bottom-2 sm:-left-2 bg-[#111827] border border-white/10 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl px-1 py-0.5 sm:px-3 sm:py-2 flex items-center gap-0.5 sm:gap-2 backdrop-blur-sm animate-float"
            style="animation-delay: 1s;">
            <div
              class="w-3 h-3 sm:w-7 sm:h-7 rounded sm:rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 sm:h-4 sm:w-4 text-amber-400" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-white font-bold text-[6px] sm:text-xs leading-none whitespace-nowrap">4.9</p>
              <p class="text-gray-500 text-[4px] sm:text-[10px] whitespace-nowrap">{{ $t('clientRating') }}</p>
            </div>
          </div>
          <div
            class="absolute top-1/2 -translate-y-1/2 -right-0.5 sm:-right-2 bg-[#111827] border border-white/10 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl px-1 py-0.5 sm:px-3 sm:py-2 flex items-center gap-0.5 sm:gap-2 backdrop-blur-sm animate-float"
            style="animation-delay: 0.5s;">
            <div
              class="w-3 h-3 sm:w-7 sm:h-7 rounded sm:rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 sm:h-4 sm:w-4 text-emerald-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-white font-bold text-[6px] sm:text-xs leading-none whitespace-nowrap">50+</p>
              <p class="text-gray-500 text-[4px] sm:text-[10px] whitespace-nowrap">{{ $t('projects') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section id="about" class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <div
          class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
          <div class="relative flex flex-col sm:flex-row gap-6 lg:gap-10 items-start">
            <div class="flex-shrink-0">
              <div class="relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30">
                </div>
                <div
                  class="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-2 border-white/20">
                  <NuxtImg src="/foto.png" alt="Muliady Putra" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ $t('about.label') }}</h2>
              <p class="text-gray-300 mb-3 leading-relaxed">{{ $t('about.mainDescription') }}</p>
              <p class="text-gray-500 text-sm mb-5 leading-relaxed">{{ $t('about.quote') }}</p>
              <div class="flex flex-wrap gap-3">
                <a href="#portfolio"
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ $t('viewPortfolio') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="skill" class="relative w-full overflow-hiddenpy-5 lg:py-8 md:py-8 sm:py-8">
     <div class="absolute inset-0 about-grid-texture pointer-events-none opacity-15"></div>
     <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex flex-col items-center text-center mb-16 about-header-enter">
        <div
          class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 backdrop-blur-sm mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          <span class="text-indigo-400 text-[11px] font-bold tracking-[0.25em] uppercase">{{ $t('skills.label')
          }}
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight">
          {{ $t('skills.title') }}
        </h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <template v-for="skill in featuredSkills" :key="skill.id">
          <div
            class="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                :style="{ backgroundColor: skill.color + '20' }">
                <component :is="skill.icon" class="w-5 h-5" :style="{ color: skill.color }" />
              </div>
              <span class="text-white font-medium text-sm truncate">{{ skill.name }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="flex justify-center mt-8">
        <NuxtLink :to="localePath('skills')"
          class="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/10 text-gray-300 text-sm font-semibold hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/8 transition-all duration-300 hover:-translate-y-0.5">
          <span>{{ $t('viewAll') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
     </div>
  </section>
  <section id="service" class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="absolute inset-0 service-grid-texture pointer-events-none opacity-15"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 ">
    </div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="flex flex-col items-center text-center mb-16 lg:mb-20">
        <div
          class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/6 backdrop-blur-sm mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span class="text-blue-400 text-[11px] font-bold tracking-[0.25em] uppercase">{{ $t('service.label') }}
          </span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4">{{
          $t('service.title') }}</h2>
        <p class="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed px-4">{{ $t('service.description')
        }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 service-grid-enter">
        <div v-for="(service) in services" :key="service.id"
          class="group relative flex flex-col gap-4 p-6 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_24px_70px_rgba(0,0,0,0.4)] cursor-default hover:bg-white/[0.04]">
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"
            :style="{ background: `radial-gradient(ellipse at 50% 0%, ${service.color}12 0%, transparent 70%)` }"></div>
          <div
            class="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="{ background: `linear-gradient(90deg, transparent, ${service.color}50, transparent)` }"></div>

          <div class="flex items-start justify-end relative z-10">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
              :style="{ backgroundColor: service.color + '15', boxShadow: `0 8px 24px ${service.color}20` }">
              <component :is="service.icon" class="w-6 h-6 transition-transform duration-500 group-hover:scale-110"
                :style="{ color: service.color }" />
            </div>
          </div>
          <div class="relative z-10 flex-1">
            <h3
              class="text-white font-black text-lg leading-tight mb-2.5 tracking-tight group-hover:text-opacity-95 transition-all duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
          </div>

          <!-- Footer -->
          <div
            class="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.06] group-hover:border-white/[0.1] transition-colors duration-300">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full animate-pulse" :style="{ backgroundColor: service.color }"></span>
              <span class="text-[11px] font-bold tracking-wide" :style="{ color: service.color }">{{
                $t('service.available') }}</span>
            </div>
            <span
              class="text-gray-700 text-[11px] font-medium group-hover:text-gray-400 transition-colors duration-300 flex items-center gap-1">
              {{ $t('service.inquire') }}
              <svg
                class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

