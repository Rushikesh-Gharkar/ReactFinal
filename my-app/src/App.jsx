import Landing from './Components/Landing'
import './App.css'
import Allen from './Components/Allen'
import {BrowserRouter, Routes, Route , Link, Outlet} from 'react-router-dom'
import Login from './Components/Login'
import UseRef from './Components/UseRef'
import Rollup from './Components/RollUp'

function App() {

  return (
    <>
      {/* <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/allen' element={<Allen />} />
      </Routes>
      <Footer/>
      </BrowserRouter> */}
      {/* <Login/> */}
        {/* <UseRef/> */}
        <Rollup/>
    </>
  )
}

function Layout(){
   return <div>
          <Header/>
          <div>
            <Outlet/>
          </div>
          <Footer/>
   </div>
}

function Header(){
  return <div>
    <Link to="/">Landing</Link>
    <Link to="/allen">Allen</Link>
  </div>
}

function Footer(){
  return <div>
    <h1>All rights reserved</h1>
  </div>
}
export default App
