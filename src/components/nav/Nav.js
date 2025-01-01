import "./styles.css"

import { NavLink } from "react-router-dom"

import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'

const Nav = () => {

  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'

  function activator(isActive) {
    return isActive ? activeLink : normalLink
  }

  return (
    <nav className="nav">
    <div className="container">
        <div className="nav-row">
          <NavLink to={'/'} className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

            <button className="dark-mode-btn">
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to={'/'} className={({isActive})=> activator(isActive)}>
                  Home
                </NavLink>                  
              </li>
              <li className="nav-list__item">
                <NavLink to={'/projects'} className={({isActive})=> activator(isActive)}>
                  Projects
                </NavLink> 
              </li>
              <li className="nav-list__item">
                <NavLink to={'/contacts'} className={({isActive})=> activator(isActive)}>
                  Contacts
                </NavLink> 
              </li>

            </ul>
        </div>
    </div>
  </nav>
  )
}
 
export default Nav 