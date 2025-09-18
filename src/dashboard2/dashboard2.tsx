import styles from './dashboard2.module.css'
import { FaSearch } from "react-icons/fa";
import image1 from '../assets/author.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import Card from './card';
import { GrTest } from "react-icons/gr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



function Dashboard2() {
  return (
    <div className={styles.dashboardContainer}>
        <div className={styles.welcomeContainer}>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                 <FaSearch />
                 Search
                </div>
            </div>
            <div className={styles.userImageContainer}>
                <div className={styles.userImage}>
                    <img src={image1} className={styles.userImage}/>
                </div>
                <div>
                    <IoIosNotificationsOutline size={30}/>

                </div>
            </div>
        </div>
        <div className={styles.overViewContainer}>
            <p className={styles.overView}>Overview</p>
            <select>
                <option>Today</option>
                <option>Yesterday</option>
                <option>Tomorrow</option>
            </select>
        </div>
        <div className={styles.cardContainer}>
            <Card
                icon={<GrTest size={30}/>}
                title='Total Tests'
                numberOfTests={140}
                increment= {2.5}
                description="Lorem Lorem Lorem"
            />
              <Card
                icon={<GrTest size={30}/>}
                title='Completed Tests'
                numberOfTests={100}
                increment= {4.5}
                description="Lorem Lorem Lorem"
            />
              <Card
                icon={<GrTest size={30}/>}
                title='Pending Tests'
                numberOfTests={140}
                increment= {2.5}
                description="Lorem Lorem Lorem"
            />
        </div>
        <div>
            <Pie data={data} />;
        </div>
    </div>
  )
}

export default Dashboard2





