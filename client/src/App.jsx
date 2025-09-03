import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './component/Products'
import ProductDetail from './component/Fav'
import Fav from './component/Fav';

const App = () => {
  return (
    <div>
      {/* <Products/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/fav' element={<Fav/>}/>
        </Routes>
      </Router>
      {/* <Routes> */}
        {/* <Route path='/' element={Products}></Route> */}
        {/* <Route path='/product/:id' element={ProductDetail}></Route> */}
      {/* </Routes> */}
      
    </div>
  )
}

export default App
