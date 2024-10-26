import './style.css';

import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
                <div className='header-logo'>
                    <h1>TUTUJS</h1>
                </div>
                <div>
                    <ul className='header-nav-barr'>
                        <li>
                            <Link to={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>Sobre</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contato</Link>
                        </li>
                        <li>
                            <NavLink className={({isActivi}) => (isActivi ? "active-link" : "")} to={'/contact'}>
                                Contato LavLink
                            </NavLink>
                        </li>
                    </ul>
                </div>
    </header>
  )
}

export default Header
