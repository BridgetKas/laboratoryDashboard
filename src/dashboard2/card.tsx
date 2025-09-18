type CardProps = {
    icon:React.ReactNode,
    title:string,
    numberOfTests:number,
    increment:number,
    description:string
}


function Card({icon,title,numberOfTests,increment,description}:CardProps) {
  return (
    <div style={{backgroundColor:title === 'Total Tests'? 'blue':'beige', color:title === 'Total Tests'? 'beige':'blue', width:'270px',padding:'30px',borderRadius:'10px',fontWeight:'light'}}>
        <div style={{display:'flex',alignItems:'center',gap:'5px',paddingBottom:'10px'}}>
            {icon}
            <p>{title}</p>
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