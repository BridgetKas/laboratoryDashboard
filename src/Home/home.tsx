import styles from './home.module.css'
import { FaSearch } from "react-icons/fa";
import image1 from '../assets/author.png'
import labImage from '../assets/lab.jpg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Bar from '../bar/bar';
import Test from '../test/test';
import NextTest from '../nextTest/nextTest';

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
    labels: ['Pending', 'Completed',],
    datasets: [
      {
        label: '# status',
        data: [12, 19,],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

function DashBoard() {
  return (
    <div className={styles.dashboardContainer}>
        <div className={styles.welcomeContainer}>
            <p style={{color:'rgb(12, 12, 196)', fontSize:'20px',fontWeight:'bold'}}>Welcome!</p>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                 <FaSearch />
                 Search
                </div>
                <div className={styles.userImageContainer}>
                    <img src={image1} className={styles.userImage}/>
                </div>
            </div>
        </div>
        <div>
        <div className={styles.statContainer}>
            <div className={styles.imageContainer}>
                <p>Today you have <span className={styles.paitents}>18 paitents</span></p>
                    
                <div className={styles.labImageContainer}>
                    <img src={labImage} alt="An image of a laboratory" className={styles.labImage}/>
                </div>
            </div>
            <div className={styles.paitentsContainer}>
                <div>
                    <p className={styles.total}><span>Total -</span> <span>18</span></p>
                    <div>
                        <Doughnut 
                            data={data} 
                            width={200} 
                            height={150}
                            options={{ maintainAspectRatio: false }}
                         />

                    </div>

                </div>
            </div>
            <div className={styles.selectPaitentsContainer}>
                <div  className={styles.selectPaitents} >
                    <select style={{ backgroundColor: 'rgb(206, 174, 174)'}}>
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Tomorrow</option>
                    </select>
                </div>
                <ul>
                    <li className={styles.appointment}><span>Total Appointment </span> <span>22</span></li>
                    <li className={styles.appointment}><span>Selected </span> <span>12</span></li>
                    <li className={styles.appointment}><span>Pending </span> <span>10</span></li>
                    <li className={styles.appointment}><span>Cancelled </span> <span>2</span></li>
                </ul>
            
            </div>

        </div>
        <div style={{display:'flex', alignItems:'start',justifyContent:'space-around',padding:'0 56px',margin:'auto'}}>
            <div className={styles.statusContainer}>
                <div className={styles.status}>
                    <p>Selected</p>
                    <p>InProgress</p>
                    <p>Status</p>
                </div>
               <div style={{padding:'0 15px'}}>
                <Test 
                        test='Covid Test'
                        status='Pending'
                        element= {<Bar percent={70}/>}
                    />
                    <Test 
                        test='Liver Test'
                        status='Pending'
                        element= {<Bar percent={50}/>}
                    /> 
                    <Test 
                        test='Tumour Panel'
                        status='Pending'
                        element= {<Bar percent={40}/>}
                    />  
                    <Test 
                        test='Hepatitis'
                        status='Sent'
                        element= {<Bar percent={100}/>}
                    />
               </div>
                
            </div>
            <div>
            </div>
            <div className={styles.statusContainer}>
                <div className={styles.status}>
                    <p>Recently Done</p>
                    <p>To do next</p>
                </div>
                <NextTest
                    test='Beta HCG'
                    status='Blood Test'
                />
                  <NextTest
                    test='D.Dimert'
                    status='Thyroid Test'
                />
                  <NextTest
                    test='Hemogram'
                    status='Kidney Test'
                />
                  <NextTest
                    test='Blood Test'
                    status='Folate Test'
                />
                <div>

            </div>
            

            </div>
        </div>
        </div>
    </div>
  )
}

export default DashBoard



