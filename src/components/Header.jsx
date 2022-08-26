import { Link } from 'react-router-dom'
const url = require('../Images/logo.jpg')

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logoLink">
          <Link className="logoLink" to="/">
            <img className="logo" src={url} alt=""></img>
          </Link>
        </div>
        <div className="navLinks">
          <Link className="navLinks" to="/projects">
            {' '}
            Projects{' '}
          </Link>
          <a
            className="navLinks"
            href="https://docs.google.com/document/d/1rHna0PyONKhjys6n_pBIbsX7TOVMP6q1UNeI1kSzmoM/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>{' '}
          <Link className="navLinks" to="/contact">
            {' '}
            Contact{' '}
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
