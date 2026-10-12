import { Fragment } from 'react'
import dailyPhrasesData from '../data/dailyPhrase.json'
import type { DailyPhraseContent } from '../types/dailyPhrase'

const dailyPhrases: DailyPhraseContent[] = dailyPhrasesData

export function getDailyPhrase(date: Date = new Date()): DailyPhraseContent {
  // Date.getDay(): domingo = 0, segunda = 1, ... sábado = 6.
  // O JSON deve manter exatamente essa ordem.
  const phraseForToday = dailyPhrases[date.getDay()]

  if (!phraseForToday) {
    throw new Error(`Não há uma frase cadastrada para o índice ${date.getDay()}.`)
  }

  return phraseForToday
}

function DailyPhraseCard() {
  const phrase = getDailyPhrase()
  const englishSentence = phrase.englishLines.join(' ')

  return (
    <div
      className="hero-card"
      aria-label={`${phrase.label}: ${englishSentence}. ${phrase.translation}`}
    >
      <div className="card-top">
        <span>{phrase.label}</span>
        <span className="card-stars" aria-hidden="true">✳</span>
      </div>
      <p className="sample-english">
        {phrase.englishLines.map((line, index) => (
          <Fragment key={`${line}-${index}`}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
        <span className="period">.</span>
      </p>
      <div className="card-divider" />
      <p className="sample-translation">{phrase.translation}</p>
      <span className="card-tag">{phrase.category} · {phrase.topic}</span>
    </div>
  )
}

export default DailyPhraseCard
