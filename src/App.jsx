import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Jobs from './Jobs'
import About from './About'
import Contact from './ContactUs';
import Apply from './Apply'


function App() {



  return (
    <>
      <div>
        {/* <Header />
        <About />
        <Jobs />
        <Footer/> */}
        <BrowserRouter>
          <Routes path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Layout() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

function NoPage() {
  return (
    <>
      <div>
        Error! Page Not Found
      </div>
    </>
  )
}

export default App
