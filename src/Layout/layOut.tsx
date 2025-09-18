import { Outlet } from 'react-router-dom'
import DesktopNav from '../desktop/desktop'
import styles from './layout.module.css'


function LayOut() {
  return (
    <div className={styles.layOutContainer}>
        <DesktopNav/>
        <div className={styles.outletContainer}>
          <Outlet/>
        </div>
    </div>
  )
}

export default LayOut