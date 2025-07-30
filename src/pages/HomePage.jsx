import HomePageLayout from "./HomePageLayout"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function HomePage() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
