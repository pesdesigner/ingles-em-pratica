import type {
  Lesson,
  LessonBlock,
  LessonTableData,
  RuleCard,
} from '../types/lesson'

type LessonSectionProps = {
  lesson: Lesson
}

function LessonTable({ table, className = '', showCaption = true }: { table: LessonTableData; className?: string; showCaption?: boolean }) {
  return (
    <div className="table-wrap">
      <table className={className}>
        {showCaption && <caption>{table.title}</caption>}
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column.key} scope="col" aria-label={column.icon ? column.label : undefined} title={column.icon ? column.label : undefined}>
                {column.icon ? <span className={`form-icon form-${column.key === 'affirmative' ? 'positive' : column.key}`} aria-hidden="true">{column.icon}</span> : column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={row[table.columns[0]?.key] ?? rowIndex}>
              {table.columns.map((column) => {
                const value = row[column.key] ?? ''
                const cellClass = column.key === 'english' ? 'english-word'
                  : column.key === 'example' ? 'example-cell'
                      : column.key === 'translation' ? 'translation-cell'
                        : undefined

                return (
                  <td key={column.key} className={cellClass}>
                    {column.key === 'toBe' ? <span className="verb-pill">{value}</span> : value}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RuleCardView({ card }: { card: RuleCard }) {
  return (
    <article className={`rule-card rule-${card.variant}`}>
      <div className="rule-card-head"><span className="rule-symbol">{card.symbol}</span><span>{card.label}</span></div>
      <p>{card.formula}</p>
      <div className="rule-example">{card.example}<small>{card.translation}</small></div>
    </article>
  )
}

function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'tableGroup':
      return (
        <div className="pronoun-tables">
          {block.tables.map((table, index) => (
            <LessonTable key={table.id} table={table} className={index === 0 ? 'pronoun-table' : 'examples-table'} />
          ))}
        </div>
      )
    case 'cardGroup':
      return <div className="rule-grid">{block.cards.map((card) => <RuleCardView key={card.id} card={card} />)}</div>
    case 'table':
      return <div className="forms-table-wrap"><h3>{block.title}</h3><LessonTable table={block} className="forms-table" showCaption={false} /></div>
    case 'callout':
      if (block.variant === 'tip') {
        return <p className="note"><span className="note-icon">i</span><span><strong>{block.title}:</strong> {block.text}</span></p>
      }

      return (
        <section className="phrase-banner" id="frases">
          <div className="phrase-icon">✦</div>
          <div>
            <p className="eyebrow">{block.label}</p>
            <h2>{block.title}</h2>
            <p>{block.examples.map((example, index) => (
              <span key={example.full}>
                {index > 0 && <span className="phrase-separator">·</span>}
                <strong>{example.full} → {example.contraction}</strong>
              </span>
            ))}</p>
          </div>
          <a href="#verb-to-be" aria-label="Voltar para a seção verb to be">↗</a>
        </section>
      )
  }
}

function LessonSection({ lesson }: LessonSectionProps) {
  return (
    <section className={`lesson-section${lesson.slug === 'verb-to-be' ? ' verb-section' : ''}`} id={lesson.slug}>
      <div className="section-heading">
        <div>
          <p className="eyebrow section-kicker">{lesson.eyebrow}</p>
          <h2>{lesson.title}</h2>
        </div>
        <p className="section-intro">{lesson.subtitle}</p>
      </div>
      {lesson.blocks.map((block) => <LessonBlockView key={block.id} block={block} />)}
    </section>
  )
}

export default LessonSection
