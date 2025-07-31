import { useState } from "react"

export default function Contact() {

  const [name , setName] = useState("");
  const [email , setEmail] =useState("");
  const [message , setMessage]=useState("");

  const handleNameChange=(value)=>{
    setName(value);
    console.log(name)
  }
  const handleEmailChange=(value)=>{
    setEmail(value);
  }
  const handleMessageChange=(value)=>{
    setMessage(value);
  }

  return (
    <div className="lg:w-[45%] w-[70%] absolute left-[50%] translate-x-[-50%]">
      <h1 className="font-bold text-3xl text-center mt-6 mb-20">CONTACT</h1>
      <form className="">
        <input onChange={(e)=>{handleNameChange(e.target.value)}} className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] caret-white accent-white text-white" placeholder="you name..."/>
        <input onChange={(e)=>{handleEmailChange(e.target.value)}} className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] text-white" placeholder="your email address " required/>
        <textarea onChange={(e)=>{handleMessageChange(e.target.value)}} className="w-full bg-black p-3 h-[200px]  placeholder:text-[#eee] text-white" placeholder="Your message..">

        </textarea>
        <button className="font-bold mt-3 px-3 py-1.5 border-2 hover:bg-black hover:text-primary rounded-lg">SUBMIT</button>
      </form>
    </div>
  )
}
