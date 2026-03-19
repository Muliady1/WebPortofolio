import {
  Database,
  FileSpreadsheet,
  Search,
  BarChart3,
  PenLine,
  Video,
  type LucideIcon
} from 'lucide-vue-next'

/* ================== TYPES ================== */
export type Service = {
  id: number
  title: string
  desc: string
  icon: LucideIcon
  color: string
}

export type Experience = {
  id: number
  role: string
  place: string
  time: string
  desc: string
}

export type Education = {
  id: number
  title: string
  place: string
  time: string
  desc: string
}

export type Certificate = {
  id: number
  title: string
  issuer: string
  icon: LucideIcon
  color: string
  date: string
}

/* ================== BASE DATA ================== */
const servicesData: Omit<Service, 'title' | 'desc'>[] = [
  { id: 1, icon: Database, color: '#FF6B6B' },
  { id: 2, icon: FileSpreadsheet, color: '#4ECDC4' },
  { id: 3, icon: Search, color: '#45B7D1' },
  { id: 4, icon: BarChart3, color: '#F7B801' },
  { id: 5, icon: PenLine, color: '#FF9999' },
  { id: 6, icon: Video, color: '#A8E6CF' }
]

const experienceData: { id: number }[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

const educationData: { id: number }[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

const certificateData: { id: number }[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
]

/* ================== HELPERS ================== */
function ensureArray<T>(val: unknown, name: string): T[] {
  if (!Array.isArray(val)) {
    throw new TypeError(`❌ ${name} must be an array`)
  }
  return val as T[]
}

function mapWithI18n<T extends { id: number }>(
  base: { id: number }[],
  translated: T[],
  name: string
): T[] {
  return base.map((item) => {
    const found = translated.find((t) => t.id === item.id)

    if (!found) {
      throw new Error(`❌ Missing ${name} translation for id ${item.id}`)
    }

    return {
      ...item,
      ...found
    }
  })
}

/* ================== MAIN COMPOSABLE ================== */
export function useData() {
  const { tm } = useI18n()

  /* ---------- SERVICES ---------- */
  const services = computed<Service[]>(() => {
    const raw = tm('servicedata')
    const arr = ensureArray<{
      id: number
      title: string
      desc: string
    }>(raw, 'services')

    return servicesData.map((s) => {
      const found = arr.find((a) => a.id === s.id)

      if (!found) {
        throw new Error(`❌ Missing service translation for id ${s.id}`)
      }

      return {
        ...s,
        title: found.title,
        desc: found.desc
      }
    })
  })

  /* ---------- EXPERIENCE ---------- */
  const experience = computed<Experience[]>(() => {
    const arr = ensureArray<Experience>(tm('experiencedata'), 'experience')
    return mapWithI18n<Experience>(experienceData, arr, 'experience')
  })

  /* ---------- EDUCATION ---------- */
  const education = computed<Education[]>(() => {
    const arr = ensureArray<Education>(tm('education'), 'education')
    return mapWithI18n<Education>(educationData, arr, 'education')
  })

  /* ---------- CERTIFICATES ---------- */
  const certificates = computed<Certificate[]>(() => {
    const arr = ensureArray<Certificate>(tm('certificatesdata'), 'certificates')
    return mapWithI18n<Certificate>(certificateData, arr, 'certificate')
  })

  return {
    services,
    experience,
    education,
    certificates
  }
}