import React from 'react'

type testProps = {
    status:string,
    test:string,
    element:React.ReactNode
}

function Test({status,test,element}:testProps) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'rgb(185, 183, 183,0.2)',marginBottom:'10px',padding:'10px 15px',borderRadius:'10px',fontWeight:'normal',color:'#1e2939', boxShadow:'1px 2px 2px gray'}}>
        <p style={{width:'31%'}}>{test}</p>
        <div style={{width:'31%'}}>{element}</div>
        <p style={{width:'31%',textAlign:'right',color:status ==='Pending'?'red':'green'}}>{status}</p>
    </div>
  )
}

export default Test