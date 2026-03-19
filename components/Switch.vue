<script setup lang="ts">
type LocaleCode = "en" | "id"
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const currentLocale = computed(() => locale.value)
const switchLocale = async (code: string) => {
  if (currentLocale.value === code) return
  const path = switchLocalePath(code as LocaleCode)
  await setLocale(code as LocaleCode)
  await router.push(path)
}
</script>

<template>
  <div class="relative flex items-center p-0.5 rounded-xl bg-gray-100 border border-gray-200/80 min-w-[60px] sm:min-w-[72px]">
    <div
      class="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-[10px] bg-blue-500 shadow-sm transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
      :style="{ transform: currentLocale === locales[1]?.code ? 'translateX(calc(100% + 4px))' : 'translateX(0)' }"
    />
    <button
      v-for="lang in locales"
      :key="lang.code"
      @click="switchLocale(lang.code)"
      class="relative z-10 w-7 sm:w-10 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 rounded-[10px]"
      :class="currentLocale === lang.code
        ? 'text-white'
        : 'text-gray-500 hover:text-blue-600'"
    >
      {{ lang.code }}
    </button>
  </div>
</template>