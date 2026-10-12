import packageJson from '../../package.json'

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">i.</span>
          <span>Inglês em Prática</span>
        </a>
        <p className="footer-tagline">Aprender leva tempo. Cada frase conta.</p>
        <span className="footer-motto">FEITO PARA APRENDER, SEM PRESSA.</span>
      </div>
      <div className="footer-credit">
        Desenvolvido por{' '}
        <a href="https://github.com/pesdesigner" target="_blank" rel="noreferrer">
          @pesdesigner
        </a>
        <span aria-hidden="true"> · </span>v{packageJson.version}
      </div>
    </footer>
  )
}

export default Footer
