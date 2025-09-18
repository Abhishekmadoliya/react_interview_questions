import React, { useState } from 'react'
import products from './products'

const Filter = () => {
  const [nameFilter, setNamefilter] = useState("")
  const [categotyFilter, setcategoryFilter]= useState("All");
  const [filteredProducts, setfilterproducts] = useState([]);
  console.log(nameFilter, categotyFilter);


  function handleFilter (){
    const filtered_items = products.filter((item)=>{
      const namefil = item.name.toLowerCase().includes(nameFilter.toLowerCase());
      const catefil = categotyFilter== "All"? item.category: item.category.toLowerCase().includes(categotyFilter.toLowerCase());


      return namefil && catefil

    })

    setfilterproducts(filtered_items) 
  }

  // handleFilter()

  // use usefeect for this logic nd prevent from rerenders
  
  
  
  return (
    <div>
      <p>filer component</p>

      <input type="text" value={nameFilter} onChange={(e)=>setNamefilter(e.target.value)}/>

      <select value={categotyFilter} onChange={(e)=>setcategoryFilter(e.target.value)}>

        <option value="Laptops">Laptops</option>
        <option value="Headphones">Headphones</option>
        <option value="Smartphones">Smartphones</option>
      </select>
      <button onClick={handleFilter}> search</button>
      
      {filteredProducts.map((item)=>{
        return(
          <>
          <p>{item.name}</p>
          <p>{item.category}</p>
          </>
        )
      })}
    </div>
  )
}

export default Filter
