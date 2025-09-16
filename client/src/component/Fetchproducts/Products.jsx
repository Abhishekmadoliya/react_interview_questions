import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Products = ({data, onfavclick}) => {
    const navigate = useNavigate()

    // const [data,setData] = useState([])

    
    function handlefavclick(item) {
        onfavclick(item)
        navigate('/fav' )
        
    }


   


   
console.log(data);
  return (
    <div>

    <p>fetching data</p>

    {data.map((item)=>{
        return(
            <div>
                <div>
                    <img src={item.image} alt=""/>
                </div>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button onClick={()=>handlefavclick(item)} >view product</button>
            </div>

        )
        
    })}


      
    </div>
  )
}

export default Products
