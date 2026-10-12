import ButtonLink from './ButtonLink'
import DailyPhraseCard from './DailyPhraseCard'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> SEU GUIA DE INGLÊS</p>
        <h1>Inglês claro.<br /><span>Um passo de cada vez.</span></h1>
        <p className="hero-description">Regras essenciais, exemplos do dia a dia e um lugar simples para voltar sempre que pintar uma dúvida.</p>
        <ButtonLink href="#pronomes" trailingIcon="↓">Começar a aprender</ButtonLink>
      </div>
      <DailyPhraseCard />
      <span className="hero-decoration decoration-one" aria-hidden="true">Aa</span>
      <span className="hero-decoration decoration-two" aria-hidden="true">✳</span>
    </section>
  )
}

export default HeroSection
