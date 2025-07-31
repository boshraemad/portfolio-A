import { useEffect } from "react"
import { initFlowbite } from "flowbite"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import HomePageLayout from "./pages/HomePageLayout"
import Project from "./pages/Project"

export default function App() {

  useEffect(()=>{
    initFlowbite()
  } , [])

  return (
 <BrowserRouter>
   <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route index element={<HomePageLayout/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="project/:id" element={<Project/>}/>
      </Route>
   </Routes>
 </BrowserRouter>
  )
}
