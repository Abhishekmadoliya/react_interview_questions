import React, { useState } from 'react'
import tasks from './task'
import { data } from 'react-router-dom';


const Pagination = () => {
    const taskperpage =5;
    const [currentpage, setCurrectpage] = useState(1);

    const indexoflastitem = taskperpage * currentpage;
    const indexoffirstitem = indexoflastitem - taskperpage;

    const currentItems = tasks.slice(indexoffirstitem,indexoflastitem)
    console.log(currentItems);
    

      const totalPages = Math.ceil(data.length / taskperpage);

  return (
    <div>

        {currentItems.map((item,index)=>{
            return(
                 <li key={index}>{item.title}</li>
        )
        })}

         <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrectpage((prev) => Math.max(prev - 1, 1))}
          disabled={currentpage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentpage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrectpage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentpage === totalPages}
        >
          Next
        </button>
      </div>

      <button onClick={()=>setCurrectpage(currentpage+1)}>
        next
      </button>
      
    </div>
  )
}

export default Pagination
