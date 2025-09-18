import styles from './home.module.css'
import { FaSearch } from "react-icons/fa";
import image1 from '../assets/image1.jpg'

function DashBoard() {
  return (
    <div className={styles.dashboardContainer}>
        <div className={styles.welcomeContainer}>
            <p>Welcome!</p>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                 <FaSearch />
                 Search
                </div>
                <div>
                    <img src={image1} className={styles.userImage}/>

                </div>
            </div>
        </div>

    </div>
  )
}

export default DashBoard