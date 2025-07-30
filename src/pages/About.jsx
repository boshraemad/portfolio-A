import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="absolute left-[50%] translate-x-[-50%]">
      <h1 className='font-bold text-3xl text-center mt-6 lg:ml-11'>ABOUT</h1>
      <p className="lg:w-[800px] w-[350px] lg:text-[18px] text-[10px] font-semibold text-gray-500 mt-32 text-center lg:leading-9">Hi, I’m Abdullah Emad, an architecture student passionate about design and creativity.
I believe thoughtful design can shape better spaces and enhance how we live.
My work blends functionality and aesthetics to create unique, inspiring solutions.</p>
      <div>
      <ul className="flex items-center justify-center space-x-8 mt-14 text-gray-600">
            <li><a href="https://www.facebook.com/share/19aC9uGQzs/?mibextid=wwXIfr" target="_blank" className="hover:text-primary"><FaFacebookF/></a></li>
            <li><a href="https://www.linkedin.com/in/abdullhemad7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_blank" className="hover:text-primary"><FaLinkedinIn/></a></li>
            <li><a href="https://www.behance.net/abdullhemad1" className="hover:text-primary"  target="_blank"><FaBehance/></a></li>
            <li><a href="https://www.instagram.com/abdullh.emad.archi?igsh=ZDg2bWxzZTZ3eDg0&utm_source=qr"  target="_blank" className="hover:text-primary"><FaInstagram/></a></li>
        </ul>
      </div>
    </div>
  )
}
