import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function HomepageFooter() {
  return (
    <footer className="bg-gray-200 flex items-center justify-center p-10 mt-4 w-full">
            <ul className="flex items-center space-x-8 text-gray-500 font-bold">
            <li><a href="https://www.facebook.com/share/19aC9uGQzs/?mibextid=wwXIfr" target="_blank" className="hover:text-primary"><FaFacebookF/></a></li>
            <li><a href="https://www.linkedin.com/in/abdullhemad7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_blank" className="hover:text-primary"><FaLinkedinIn/></a></li>
            <li><a href="https://www.behance.net/abdullhemad1" className="hover:text-primary"  target="_blank"><FaBehance/></a></li>
            <li><a href="https://www.instagram.com/abdullh.emad.archi?igsh=ZDg2bWxzZTZ3eDg0&utm_source=qr"  target="_blank" className="hover:text-primary"><FaInstagram/></a></li>
        </ul>
    </footer>
  )
}
