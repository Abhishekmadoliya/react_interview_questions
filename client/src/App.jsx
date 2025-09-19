import React, { use, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './component/Fetchproducts/Products';
import Fav from './component/Fetchproducts/Fav';
import Accordian from './component/Accordian';
import Otp from './component/Opt/Otp';
import Search from './component/Search&filter/Search';
import Filter from './component/Search&filter/Filter';
import Togglepass from './component/Togglepassword/Togglepass';

const App = () => {

// const [fav, setfav] = useState([])
// const [products, setproducts] = useState([])

// const onfavclick = (item) =>{
//   setfav([...fav, item])
// }


// useEffect(()=>{
//   async function fetchData(){
//     try{
//       const res = await fetch("https://fakestoreapi.com/products/");
//       const data = await res.json();
//       setproducts(data)
//       console.log(data);
//     }catch(err){
//       console.log("error in fetch ", err);
//     }
//   }

//   fetchData()
// },[])


  return (
    <div>
      {/* <Products/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Togglepass/>}/>
          {/* <Route path='/' element{<Filter/>} /> */}



          {/* <Route path='/' element={<Otp/>}/> */}
          {/* <Route path='/products' element={<Products data={products} onfavclick={onfavclick}/>}/> */}
          {/* <Route path='/fav' element={<Fav data={fav}/>}/> */}
          {/* <Route path='/accordian' element={<Accordian/>}/> */}
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App
