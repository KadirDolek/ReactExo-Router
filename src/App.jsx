
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import InfoProduct from './pages/InfoProduct'



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projet" element={<Product />} />
        <Route path="/projet1" element={<Product1 />} /> 
        <Route path="/projet2" element={<Product2 />} /> 
        <Route path="/infoproduct/:id" element={<InfoProduct />} /> 
      </Routes>
    </>
  )
}

export default App
