import styles from './dashboard2.module.css'
import { FaFileMedical } from "react-icons/fa";


const patientFiles = [
  { id: 1, name: "Prescription.pdf", type: "pdf" },
  { id: 2, name: "Check up result.doc", type: "doc" },
  { id: 3, name: "Hepatology Report.pdf", type: "pdf" },
  { id: 4, name: "X-ray result.doc", type: "doc" },
];

function getColor(file:string){
    switch(file){
        case 'Prescription.pdf':
            return'blue'
        case 'Check up result.doc':
            return 'green'
        case 'Hepatology Report.pdf':
            return 'red'
        case 'X-ray result.doc':
            return 'purple'
    }
}

export default function PatientFile() {
  return (
    <div className={styles.fileCard}>
      <h3 className={styles.fileTitle}>Patient File</h3>
      <ul className={styles.fileList}>
        {patientFiles.map((file) => (
          <li key={file.id} className={styles.fileItem}>
            <span style={{color:`${getColor(file.name)}`}}><FaFileMedical /></span>
            <span>{file.name}</span>
            <button className={styles.fileAction}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}