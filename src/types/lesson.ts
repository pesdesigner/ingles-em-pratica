export type LessonTableColumn = {
  key: string
  label: string
  icon?: string
}

export type LessonTableData = {
  id: number
  title: string
  columns: LessonTableColumn[]
  rows: Record<string, string>[]
}

export type RuleCard = {
  id: number
  variant: 'positive' | 'negative' | 'question'
  symbol: '+' | '−' | '?'
  label: string
  formula: string
  example: string
  translation: string
}

export type TableGroupBlock = {
  id: number
  type: 'tableGroup'
  tables: LessonTableData[]
}

export type RuleCardGroupBlock = {
  id: number
  type: 'cardGroup'
  cards: RuleCard[]
}

export type TableBlock = LessonTableData & {
  type: 'table'
}

export type TipCalloutBlock = {
  id: number
  type: 'callout'
  variant: 'tip'
  title: string
  text: string
}

export type QuickReminderBlock = {
  id: number
  type: 'callout'
  variant: 'quickReminder'
  label: string
  title: string
  examples: {
    full: string
    contraction: string
  }[]
}

export type LessonBlock =
  | TableGroupBlock
  | RuleCardGroupBlock
  | TableBlock
  | TipCalloutBlock
  | QuickReminderBlock

export type Lesson = {
  id: number
  order: number
  slug: string
  eyebrow: string
  title: string
  subtitle: string
  blocks: LessonBlock[]
}

export type LessonDocument = {
  lessons: Lesson[]
}
