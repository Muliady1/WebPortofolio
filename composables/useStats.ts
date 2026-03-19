const COLORS = {
  blue: '#60a5fa',
  pink: '#f472b6',
  green: '#34d399',
  amber: '#fbbf24',
  purple: '#a78bfa',
  cyan: '#38bdf8',
} as const

export type Stat = {
  value: string
  label: string
  icon: string
  color: string
}
export type DataItem = {
  icon: string
  title: string
  desc: string
  color: string
}

/* ================== BASE DATA ================== */
const valuesBase: { id: number; icon: string; color: string }[] = [
  { id: 1, icon: '⚡', color: COLORS.blue },
  { id: 2, icon: '🤝', color: COLORS.green },
  { id: 3, icon: '🔍', color: COLORS.amber },
  { id: 4, icon: '📈', color: COLORS.purple },
  { id: 5, icon: '🌐', color: COLORS.pink },
  { id: 6, icon: '🎯', color: COLORS.cyan },
]

function ensureArray<T>(val: unknown, name: string): T[] {
  if (!Array.isArray(val)) {
    throw new TypeError(`❌ ${name} must be an array`)
  }
  return val as T[]
}

function mapWithI18n(
  base: { id: number; icon: string; color: string }[],
  translated: { id: number; title: string; desc: string }[]
): DataItem[] {
  return base.map((item) => {
    const found = translated.find((t) => t.id === item.id)

    if (!found) {
      throw new Error(`❌ Missing i18n data for id ${item.id}`)
    }

    return {
      ...item,
      title: found.title,
      desc: found.desc
    }
  })
}

export function useStats() {
  const { tm } = useI18n()

  const values = computed<DataItem[]>(() => {
    const arr = ensureArray<{ id: number; title: string; desc: string }>(tm('values.data'), 'values')
    return mapWithI18n(valuesBase, arr)
  })

  return {
    values,
    serviceColors: [COLORS.blue, COLORS.pink, COLORS.green, COLORS.amber, COLORS.purple, COLORS.cyan],
    expColors: [COLORS.blue, COLORS.purple],
    eduColors: [COLORS.green, COLORS.amber, COLORS.pink],
  }
}
