import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">Michaël Jobin</Link>
      </h1>
    </header>
  )
}

export default Header
