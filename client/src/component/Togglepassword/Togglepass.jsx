import React, { useState } from 'react'
import { useRef } from 'react'


const Togglepass = () => {
    const [pass,setPass] = useState(true)

    const input_ref = useRef()
    const Togglepassword = ()=>{
        setPass(!pass)
        // pass?input_ref.current.attributes.type = "text": "false"

    }
        
    

  return (
    <div>


        <input type={pass?"password":"text"} ref={input_ref} placeholder='enter pass'/>
        <button onClick={Togglepassword}>-</button>
      
    </div>
  )
}

export default Togglepass
