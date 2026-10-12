const pronouns = [
  { english: 'I', portuguese: 'eu', verb: 'am', example: 'I am ready.', translation: 'Eu estou pronto(a).' },
  { english: 'You', portuguese: 'você / vocês', verb: 'are', example: 'You are here.', translation: 'Você está aqui.' },
  { english: 'He', portuguese: 'ele', verb: 'is', example: 'He is my brother.', translation: 'Ele é meu irmão.' },
  { english: 'She', portuguese: 'ela', verb: 'is', example: 'She is happy.', translation: 'Ela está feliz.' },
  { english: 'It', portuguese: 'ele / ela (coisas e animais)', verb: 'is', example: 'It is cold today.', translation: 'Está frio hoje.' },
  { english: 'We', portuguese: 'nós', verb: 'are', example: 'We are students.', translation: 'Nós somos estudantes.' },
  { english: 'They', portuguese: 'eles / elas', verb: 'are', example: 'They are at home.', translation: 'Eles estão em casa.' },
]

const forms = [
  { subject: 'I', affirmative: 'I am', negative: 'I am not', question: 'Am I?' },
  { subject: 'You / We / They', affirmative: 'You are', negative: 'You are not', question: 'Are you?' },
  { subject: 'He / She / It', affirmative: 'She is', negative: 'She is not', question: 'Is she?' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Inglês em Prática, início">
          <span className="brand-mark">i.</span>
          <span>Inglês em Prática</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#pronomes">Pronomes</a>
          <a href="#verb-to-be">Verb to be</a>
          <a href="#frases">Frases úteis</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> SEU GUIA DE INGLÊS</p>
            <h1>Inglês claro.<br /><span>Um passo de cada vez.</span></h1>
            <p className="hero-description">Regras essenciais, exemplos do dia a dia e um lugar simples para voltar sempre que pintar uma dúvida.</p>
            <a className="primary-link" href="#pronomes">Começar a aprender <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-card" aria-label="Exemplo: I am learning English, Eu estou aprendendo inglês">
            <div className="card-top"><span>FRASE DO DIA</span><span className="card-stars">✳</span></div>
            <p className="sample-english">I am learning<br />English<span className="period">.</span></p>
            <div className="card-divider" />
            <p className="sample-translation">Eu estou aprendendo inglês.</p>
            <span className="card-tag">PRESENTE · VERB TO BE</span>
          </div>
          <span className="hero-decoration decoration-one">Aa</span>
          <span className="hero-decoration decoration-two">✳</span>
        </section>

        <div className="content-wrap">
          <section className="lesson-section" id="pronomes">
            <div className="section-heading">
              <div><p className="eyebrow section-kicker">01 — O COMEÇO DE TUDO</p><h2>Pronomes pessoais</h2></div>
              <p className="section-intro">Os pronomes dizem quem está fazendo ou sendo algo na frase.</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Em inglês</th><th>Em português</th><th>Verb to be</th><th>Exemplo</th><th>Tradução</th></tr></thead>
                <tbody>{pronouns.map((item) => (
                  <tr key={item.english}>
                    <td><span className="english-word">{item.english}</span></td><td>{item.portuguese}</td>
                    <td><span className="verb-pill">{item.verb}</span></td><td className="example-cell">{item.example}</td><td className="translation-cell">{item.translation}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <p className="note"><span className="note-icon">i</span> <span><strong>Dica:</strong> em inglês, o pronome geralmente aparece na frase. <em>Am happy</em> não funciona sozinho: diga <em>I am happy.</em></span></p>
          </section>

          <section className="lesson-section verb-section" id="verb-to-be">
            <div className="section-heading">
              <div><p className="eyebrow section-kicker">02 — UM VERBO ESSENCIAL</p><h2>O famoso <em>verb to be</em></h2></div>
              <p className="section-intro"><em>To be</em> significa <strong>ser</strong> ou <strong>estar</strong>. A forma muda conforme o pronome.</p>
            </div>
            <div className="rule-grid">
              <article className="rule-card rule-positive"><div className="rule-card-head"><span className="rule-symbol">+</span><span>AFIRMATIVA</span></div><p>Pronome + <strong>am / is / are</strong> + complemento</p><div className="rule-example">I <strong>am</strong> a student.<small>Eu sou estudante.</small></div></article>
              <article className="rule-card rule-negative"><div className="rule-card-head"><span className="rule-symbol">−</span><span>NEGATIVA</span></div><p>Pronome + <strong>am / is / are + not</strong> + complemento</p><div className="rule-example">She <strong>is not</strong> tired.<small>Ela não está cansada.</small></div></article>
              <article className="rule-card rule-question"><div className="rule-card-head"><span className="rule-symbol">?</span><span>PERGUNTA</span></div><p><strong>Am / Is / Are</strong> + pronome + complemento?</p><div className="rule-example"><strong>Are</strong> they at home?<small>Eles estão em casa?</small></div></article>
            </div>
            <div className="forms-table-wrap"><h3>As formas em um só lugar</h3><div className="table-wrap"><table className="forms-table"><thead><tr><th>Com quem?</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr></thead><tbody>{forms.map((form) => <tr key={form.subject}><td>{form.subject}</td><td>{form.affirmative}</td><td>{form.negative}</td><td>{form.question}</td></tr>)}</tbody></table></div></div>
          </section>

          <section className="phrase-banner" id="frases"><div className="phrase-icon">✦</div><div><p className="eyebrow">LEMBRETE RÁPIDO</p><h2>Contrações aparecem o tempo todo.</h2><p><strong>I am → I'm</strong><span className="phrase-separator">·</span><strong>You are → You're</strong><span className="phrase-separator">·</span><strong>She is → She's</strong></p></div><a href="#verb-to-be" aria-label="Voltar para a seção verb to be">↗</a></section>
        </div>
      </main>
      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">i.</span><span>Inglês em Prática</span></a><p>Aprender leva tempo. Cada frase conta.</p><span>FEITO PARA APRENDER, SEM PRESSA.</span></footer>
    </div>
  )
}

export default App
