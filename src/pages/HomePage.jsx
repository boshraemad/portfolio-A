import HomePageLayout from "./HomePageLayout"
import Navbar from "../components/Navbar"
import HomepageFooter from "../components/HomepageFooter"
import { Outlet } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <Navbar/>
        <Outlet/>
        <HomepageFooter/>
    </div>
  )
}
