import React from 'react'

function Bar({percent}:{percent:number}) {
  return (
    <div style={{backgroundColor:'rgba(128, 128, 128,0.3)' }}>
        <div style={{backgroundColor:percent<100 ? 'orange':"green",
            width:`${percent}%`,
            textAlign:'center',
        }}>
            {percent}%
        </div>

    </div>
  )
}

export default Bar