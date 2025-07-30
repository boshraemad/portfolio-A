import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="absolute left-[50%] translate-x-[-50%]">
      <h1 className='font-bold text-3xl text-center mb-6'>ABOUT</h1>
      <div className="flex items-center justify-center mt-4">
        <img src={profile} alt="profile" className="lg:w-[300px] w-[250px]"/>
      </div>
      <p className="mb-6 lg:w-[800px] md:w-full  w-[350px] lg:text-[18px] md:text-[14px] text-[10px] font-semibold text-gray-500 mt-10 text-center lg:leading-9 md:leading-8">Hi, I’m Abdullah Emad, an architecture student passionate about design and creativity.
I believe thoughtful design can shape better spaces and enhance how we live.
My work blends functionality and aesthetics to create unique, inspiring solutions.</p>
    </div>
  )
}
