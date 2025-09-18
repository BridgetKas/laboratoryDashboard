
import { NavLink  } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import styles from './desktop.module.css'

const navBar = [
  {
    label:<FaHome size={30} color='white'/>,
    id:1,
    path:'/'
  },
  {
    label:<IoNotifications size={30} color='white'/>,
    id:2,
    path:'/what-we-do'
  },
  {
    label:<LuMessageCircle size={30} color='white'/>,
    id:3,
    path:'/our-products'
  },
  {
    label:<FaCalendar size={30} color='white'/>,
    id:4,
    path:'/about-us'
  },
  {
    label:<IoSettingsSharp size={30} color='white'/>,
    id:5,
    path:'/contact-us'
  }
]

function DesktopNav() {
  
  return (
    <div className={styles.mainContainer}>
      {/* Logo and company name */}
        <div className={styles.company}>
          <p className="text-center">GASOBU</p>
        </div>
        {/* NavLinks */}
        <ul className={styles.linkContainer}>
          {
            navBar.map((link)=> (
              <li key={link.id}>
                <NavLink 
                  to={link.path} 
                >
                  {link.label}
                </NavLink>
            </li>
            ))
          }
        </ul>
    </div>
  )
}

export default DesktopNav