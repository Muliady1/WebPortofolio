<script setup>
defineI18nRoute({
  paths: {
    en: '/about',
    id: '/tentang'
  }
})
const localePath = useLocalePath()
const socialLinks = useSocialLinks()
const { education, experience, certificates } = useData()
const { expColors, eduColors, values } = useStats()
</script>
<template>
  <section class="relative w-full py-5 lg:py-15 md:py-15 sm:py-15 pt-8 lg:pt-25 md:pt-25 sm:pt-25 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]"
      style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 50px 50px;">
    </div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 lg:pt-20 md:pt-20 sm:pt-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('about.label') }}</span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            {{ $t('about.headerTitle') }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {{ $t('about.headerTitleHightlight') }}
            </span>
          </h1>
          <p class="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            {{ $t('about.mainDescription') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muliadyputra20@gmail.com" target="_blank"
              class="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
              <span class="relative text-sm">{{ $t('getInTouch') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink :to="localePath('portfolio')"
              class="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/15 text-gray-300 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200">
              {{ $t('viewPortfolio') }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/30 to-purple-600/20 blur-3xl scale-110">
            </div>
            <div
              class="relative w-72 sm:w-80 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl">
              <div class="relative h-80 overflow-hidden">
                <NuxtImg src="/foto3.png" alt="Muliady Putra" class="w-full h-full object-cover object-top" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
              </div>
              <div class="p-6 -mt-4 relative">
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-emerald-400 text-xs font-medium">{{ $t('availableForWork') }}</span>
                </div>
                <h3 class="text-white font-bold text-xl">Muliady Putra</h3>
                <p class="text-indigo-400 text-sm font-medium mt-0.5">{{ $t('about.profession') }}</p>

                <!-- Social Links -->
                <div class="flex gap-2 mt-4">
                  <template v-for="social in socialLinks" :key="social.id">
                    <a v-if="social.url" :href="String(social.url)" target="_blank" :title="social.name"
                      class="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                      <svg v-if="social.name === 'GitHub'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <svg v-else-if="social.name === 'Instagram'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <svg v-else-if="social.name === 'WhatsApp'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <svg v-else-if="social.name === 'Telegram'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                      <svg v-else-if="social.name === 'Email'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                      </svg>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
      <!-- Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-1/4 w-[300px] sm:w-[500px] lg:w-[700px] h-[250px] sm:h-[400px] lg:h-[600px] bg-indigo-600/4 rounded-full blur-[160px]"></div>
        <div class="absolute bottom-0 left-1/4 w-[250px] sm:w-[400px] lg:w-[600px] h-[200px] sm:h-[350px] lg:h-[500px] bg-purple-600/3 rounded-full blur-[140px]"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('about.aboutexperience') }}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {{ $t('about.aboutexperiencetitle') }}
            </span>
          </h2>
          <p class="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">{{ $t('about.aboutexperiencetitledesc') }}</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span class="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{{ $t('experience.label') }}</span>
            </div>

            <div class="relative">
              <!-- Timeline Line -->
              <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent"></div>

              <div class="space-y-6">
                <div v-for="(exp, index) in experience" :key="exp.id" class="relative flex gap-5 group">
                  <!-- Icon -->
                  <div class="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/[0.02] shadow-lg transition-transform duration-300 group-hover:scale-110"
                    :style="{ boxShadow: `0 0 20px ${expColors[index % expColors.length]}30` }">
                    💼
                  </div>

                  <!-- Card -->
                  <div class="flex-1 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                    <div class="flex items-center justify-between gap-3 mb-2">
                      <h3 class="text-white font-semibold text-sm sm:text-base">{{ exp.role }}</h3>
                      <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                        :style="{ color: expColors[index % expColors.length], borderColor: expColors[index % expColors.length] + '30', backgroundColor: expColors[index % expColors.length] + '10' }">
                        {{ exp.time }}
                      </span>
                    </div>
                    <p class="text-xs font-medium mb-2" :style="{ color: expColors[index % expColors.length] }">{{ exp.place }}</p>
                    <p class="text-gray-400 text-sm leading-relaxed">{{ exp.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education Column -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span class="text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{{ $t('educationlabel') }}</span>
            </div>

            <div class="relative">
              <!-- Timeline Line -->
              <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-blue-500/20 to-transparent"></div>

              <div class="space-y-6">
                <div v-for="(edu, index) in education" :key="edu.id" class="relative flex gap-5 group">
                  <!-- Icon -->
                  <div class="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/[0.02] shadow-lg transition-transform duration-300 group-hover:scale-110"
                    :style="{ boxShadow: `0 0 20px ${eduColors[index % eduColors.length]}30` }">
                    🎓
                  </div>

                  <!-- Card -->
                  <div class="flex-1 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                    <div class="flex items-center justify-between gap-3 mb-2">
                      <h3 class="text-white font-semibold text-sm sm:text-base">{{ edu.title }}</h3>
                      <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                        :style="{ color: eduColors[index % eduColors.length], borderColor: eduColors[index % eduColors.length] + '30', backgroundColor: eduColors[index % eduColors.length] + '10' }">
                        {{ edu.time }}
                      </span>
                    </div>
                    <p class="text-xs font-medium mb-2" :style="{ color: eduColors[index % eduColors.length] }">{{ edu.place }}</p>
                    <p class="text-gray-400 text-sm leading-relaxed">{{ edu.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- VALUES SECTION -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-[250px] sm:w-[400px] lg:w-[600px] h-[200px] sm:h-[350px] lg:h-[500px] bg-amber-600/4 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[200px] sm:w-[350px] lg:w-[500px] h-[150px] sm:h-[300px] lg:h-[400px] bg-orange-600/3 rounded-full blur-[130px]"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('values.label') }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          {{ $t('values.title') }}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            {{ $t('values.titleHighlight') }}
          </span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">{{ $t('values.description') }}</p>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="val in values" :key="val.title"
          class="group flex gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 cursor-default">
          <!-- Icon -->
          <div
            class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
            :style="{ backgroundColor: val.color + '15' }">
            {{ val.icon }}
          </div>

          <!-- Content -->
          <div>
            <h3 class="text-white font-semibold text-sm mb-1.5">{{ val.title }}</h3>
            <p class="text-gray-400 text-xs leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- CERTIFICATES SECTION -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-1/3 w-[200px] sm:w-[350px] lg:w-[500px] h-[150px] sm:h-[300px] lg:h-[400px] bg-rose-600/4 rounded-full blur-[140px]"></div>
      <div class="absolute bottom-0 left-1/4 w-[150px] sm:w-[300px] lg:w-[400px] h-[150px] sm:h-[300px] lg:h-[400px] bg-pink-600/3 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
          <span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
          <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('certificates.label') }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          {{ $t('certificates.title') }}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
            {{ $t('certificates.titleHighlight') }}
          </span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">{{ $t('certificates.description') }}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="cert in certificates" :key="cert.title"
          class="group flex flex-col gap-3 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 cursor-default">
          <div class="text-3xl">{{ cert.icon }}</div>
          <div>
            <h3 class="text-white font-semibold text-sm mb-1">{{ cert.title }}</h3>
            <p class="text-xs font-medium mb-1" :style="{ color: cert.color }">{{ cert.issuer }}</p>
            <p class="text-gray-400 text-xs"> {{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- DOWNLOAD CV SECTION -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-cyan-600/6 rounded-full blur-[150px]">
      </div>
    </div>

    <div class="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span class="text-xs font-medium text-gray-300 tracking-wide">{{ $t('cv.label') }}</span>
      </div>

      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {{ $t('cv.title') }}
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          {{ $t('cv.titleHighlight') }}
        </span>
      </h2>

      <p class="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
        {{ $t('cv.description') }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/cv-en.pdf" download="Muliady_Putra_CV_English.pdf"
          class="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
          <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="relative h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span class="relative">{{ $t('cv.englishButton') }}</span>
        </a>

        <a href="/cv-id.pdf" download="Muliady_Putra_CV_Indonesia.pdf"
          class="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
          <span class="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="relative h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span class="relative">{{ $t('cv.indonesiaButton') }}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- CTA SECTION -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="relative w-full overflow-hidden py-5 lg:py-8 md:py-8 sm:py-8">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-purple-600/5 to-pink-600/4"></div>
    </div>

    <div class="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-emerald-400 text-xs font-medium">{{ $t('availableForWork') }}</span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        {{ $t('cta.title') }}<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          {{ $t('cta.titleHighlight') }}
        </span>
      </h2>

      <p class="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10">
        {{ $t('cta.description') }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink :to="localePath('contact')"
          class="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]">
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          <span class="relative">{{ $t('getInTouch') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg"
            class="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>

        <NuxtLink :to="localePath('portfolio')"
          class="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/15 text-gray-300 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200">
          {{ $t('viewPortfolio') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>