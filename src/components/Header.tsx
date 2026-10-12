import NavigationMenu from './NavigationMenu'

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Inglês em Prática, início">
        <span className="brand-mark">i.</span>
        <span>Inglês em Prática</span>
      </a>
      <NavigationMenu />
    </header>
  )
}

export default Header
