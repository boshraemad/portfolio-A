import {useState , useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();
  const [name , setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w1a2807', 'template_6hjqps3', form.current, {
        publicKey: 'iaJ-fP4NT8Ru6KEfX',
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "message sent successfully",
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            setName("");
            setEmail("");
            setMessage("");
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="lg:w-[45%] w-[70%] absolute left-[50%] translate-x-[-50%]">
      <h1 className="font-bold text-3xl text-center mt-6 mb-20">CONTACT</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input name="name"  className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] caret-white accent-white text-white" placeholder="you name..." onChange={(e)=>setName(e.target.value)} value={name}/>
        <input name="email"  className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] text-white" placeholder="your email address " required  onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <textarea name="message" className="w-full bg-black p-3 h-[200px]  placeholder:text-[#eee] text-white" placeholder="Your message.."  onChange={(e)=>setMessage(e.target.value)} value={message}/>
        <button type="submit" className="font-bold mt-3 px-3 py-1.5 border-2 hover:bg-black hover:text-primary rounded-lg">SUBMIT</button>
      </form>
    </div>
  )
}
