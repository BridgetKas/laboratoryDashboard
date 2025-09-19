type CardProps = {
    icon:React.ReactNode,
    title:string,
    numberOfTests:number,
    increment:number,
    description:string
}

function getColor(title:string) {
  switch(title) {
    case "Total Tests":
      return 'beige'
    case "Cancelled Tests":
      return 'red'
    case "Completed Tests" :
      return 'green'
    default: return 'orange'
  }
}


function Card({icon,title,numberOfTests,increment,description}:CardProps) {
  return (
    <div style={{backgroundColor:title === 'Total Tests'? 'blue':'beige', color:`${getColor(title)}`, width:'270px',padding:'30px',borderRadius:'10px',fontWeight:'light'}}>
        <div style={{display:'flex',alignItems:'center',gap:'5px',paddingBottom:'10px'}}>
            {icon}
            <p style={{fontWeight:'bold',fontSize:'17px'}}>{title}</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <p style={{fontSize:'22px',fontWeight:'bold'}}>{numberOfTests}</p>
            <p style={{fontSize:'12px',fontWeight:'light'}}> + {increment} %</p>
        </div>
        <p style={{fontSize:'12px',marginTop:'10px'}}>{description}</p>
    </div>
  )
}

export default Card