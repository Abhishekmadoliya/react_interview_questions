import React, { useState } from 'react'
import products from './products'


const Search = () => {
    const [searchItem , setsearchItem] = useState(""); 
    const [filtered, setFiltered] = useState([]) 
    console.log(searchItem);
    console.log(filtered);
    


    const handleSearch = (e)=>{
        setsearchItem(e.target.value)

        const filtered_product = products.filter((item)=>{
           return item.name.toLowerCase().includes(searchItem.toLowerCase())
        })

        setFiltered(filtered_product)

    }
     
  return (
    <div>
      <p>search component</p>

      <input 
      type="text"
      onChange={(e)=>handleSearch(e)}placeholder='serachitem' value={searchItem}/>

      <h1>filtered products</h1>
      {filtered.map((item)=>{
        return(

            <p>{item.name}</p>
        )
      })}
    </div>

    
  )
}

export default Search
