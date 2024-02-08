import './styles.css';
import logo from '../../assets/logo_andres.svg';

const Header = () => {
  return <>
    <header>
      <div className='header-logo'>
        <img src={logo} alt='Andres Larrotta' />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">
              Experience
            </a>
          </li>
          <li>
            <a href="/">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </>
}

export default Header;
