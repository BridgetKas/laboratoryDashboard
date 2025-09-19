import styles from './dashboard2.module.css'




const appointments = [
  { id: 1, name: "Ronald Richards", gender: "Male", disease: "Jaundice", time: "10:30 AM" },
  { id: 2, name: "Jane Cooper", gender: "Female", disease: "Diabetes", time: "10:30 AM" },
  { id: 3, name: "Leslie Alexander", gender: "Female", disease: "Pyrexia", time: "10:30 AM" },
  { id: 4, name: "Jerome Bell", gender: "Male", disease: "Pyrexia", time: "10:30 AM" },
];

function getColor (dis:string) {
    switch(dis) {
        case"Jaundice":
        return 'rgb(255, 165, 0)'
        case "Diabetes":
        return 'rgb(0, 0, 255 )'
        default: return 'rgb(0, 100, 0))'
    }
}
function getBackgroundColor (dis:string) {
    switch(dis) {
        case"Jaundice":
        return 'rgba(255, 255, 0,0.5)'
        case "Diabetes":
        return 'rgba(0, 0, 255 , 0.5)'
        default:return 'rgba(0, 255, 0,0.5)'
    }
}
export default function AppointmentTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.appointmentTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.name}</td>
              <td>{appt.gender}</td>
              <td>
                <span  style={{color:`${getColor(appt.disease)}`,backgroundColor:`${getBackgroundColor(appt.disease)}`, padding:'10px',width:'80px',display:'inline-block',borderRadius:'5px'}}>
                  {appt.disease}
                </span>
              </td>
              <td>{appt.time}</td>
              <td>
                <button className={styles.actionBtn}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}