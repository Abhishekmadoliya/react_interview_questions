import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Products = () => {
    const navigate = useNavigate()

    const [data,setData] = useState([])
    const [fav, setfav] = useState([])

    function handlefavclick(item) {
        setfav(...fav, item)


        navigate('/fav' )
        
    }


    // async function fetchData(){
    //     try{
    //         const res = await axios.get("https://fakestoreapi.com/products/");
    //         console.log(res.data)
    //         setData(res.data)

    //     }catch(err){

    //         console.log("error in fetch ", err);
            
    //     }
    // }


    useEffect( ()=>{
       async function fetchData(){
        try{
            const res = await axios.get("https://fakestoreapi.com/products/");
            // console.log(res.data)
            setData(res.data)

        }catch(err){

            console.log("error in fetch ", err);
            
        }
    }

    
    
    fetchData()
    
},[])
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
