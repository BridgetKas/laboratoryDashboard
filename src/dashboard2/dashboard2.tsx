import styles from './dashboard2.module.css'
import { FaSearch } from "react-icons/fa";
import image1 from '../assets/author.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import Card from './card';
import { GrTest } from "react-icons/gr";
import { TbTestPipeOff } from "react-icons/tb";
import { GrTestDesktop } from "react-icons/gr";
import AppointmentTable from './test';
import PatientFile from './files';


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
            <select style={{padding:'5px',borderRadius:'5px',color:'rgb(60, 0, 8)', backgroundColor:'rgb(255, 127, 127)'}}>
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
            icon={ <GrTestDesktop size={30} />}
            title='Pending Tests'
            numberOfTests={30}
            increment= {2.5}
            description="Lorem Lorem Lorem"
          />
          <Card
            icon={<TbTestPipeOff size={30}/>}
            title='Cancelled Tests'
            numberOfTests={10}
            increment= {0.5}
            description="Lorem Lorem Lorem"
          />
        </div>
        <div className={styles.appointmentContainer}>
          <div className={styles.latestAppointment}>
            <p>Appointment</p>
            <select style={{padding:'10px',borderRadius:'5px',color:'rgb(60, 0, 8)', backgroundColor:'rgb(255, 127, 127)'}}>
              <option>Latest Appointment</option>
            </select>
          </div>
         
        </div>
        <div style={{display:'flex',alignItems:'start',gap:'20px'}}>
          <AppointmentTable/>
          <PatientFile/>
        </div>
      
    </div>
  )
}

export default Dashboard2







