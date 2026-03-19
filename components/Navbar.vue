<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const navLinks = useLinks()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
const isActive = (name: string) => {
  const currentLocale = locale.value as string
  return route.name === `${name}___${currentLocale}` || 
         route.name === name
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : ""
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ""
}

watch(() => route.name, () => {
  closeMobileMenu()
})
</script>

<template>
  <header class="bg-white fixed top-3 left-1/2 -translate-x-1/2 z-50  rounded-2xl w-[94%] max-w-5xl">
    <div class="px-5 sm:px-7">
      <div class="flex items-center justify-between">
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-3 no-underline group">
          <div class="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center">
            <NuxtImg src="/logods.png" alt="Logo" class="w-10 h-10 object-cover" />
          </div>

          <span class="text-base sm:text-xl md:text-2xl font-bold text-[#0d0d1f] tracking-tight">
            Digital Solutions
          </span>
        </NuxtLink>

        <div class="flex items-center gap-3">

          <!-- Desktop Menu -->
          <nav class="hidden lg:flex items-center px-2 py-2 gap-1" aria-label="Main navigation">
            <NuxtLink
              v-for="(link, index) in navLinks"
              :key="link.name"
              :to="localePath({ name: link.name })"
              prefetch
              class="relative px-3 py-2.5 no-underline text-xl font-bold rounded-xl transition-all duration-300 group hover:bg-blue-400 text-black"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <span class="relative z-10">
                {{ t(link.label) }}
              </span>
              <span
                class="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                :class="isActive(link.name)
                  ? 'w-6 bg-blue-400'
                  : 'w-0 group-hover:w-5'"
              />
            </NuxtLink>
          </nav>

            <Switch />
          <button
            class="lg:hidden w-8 h-8 flex items-center justify-center bg-[#0d0d1f] rounded-xl transition-all duration-300 relative"
            @click="toggleMobileMenu"
            aria-label="Toggle menu">
            <span
              class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 absolute"
              :class="{ 'rotate-45': isMobileMenuOpen }"
            />
            <span
              class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 absolute"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            />
            <span
              class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 absolute"
              :class="{ '-rotate-45': isMobileMenuOpen }"
            />
          </button>

        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <Transition name="mobile-menu">
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 pt-24"
    >
      <nav
        class="flex flex-col items-center gap-2 px-5"
        aria-label="Mobile navigation">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="link.name"
          :to="localePath({ name: link.name })"
          class="w-full text-center text-2xl font-semibold no-underline py-4 rounded-2xl transition-all duration-300 relative text-white hover:text-blue-400 hover:bg-[#d4a853]/10"
          :class="{ 'text-blue-400': isActive(link.name) }"
          :style="{ animationDelay: `${index * 80}ms` }"
          @click="closeMobileMenu"
        >
          {{ t(link.label) }}
          <span
            class="absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-blue-500 transition-all duration-300"
            :class="isActive(link.name) ? 'w-8' : 'w-0'"
          />
        </NuxtLink>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>