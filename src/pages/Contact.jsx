
export default function Contact() {
  return (
    <div className="lg:w-[45%] w-[70%] absolute left-[50%] translate-x-[-50%]">
      <h1 className="font-bold text-3xl text-center mt-6 mb-12 lg:ml-11 md:ml-10">CONTACT</h1>
      <form className="">
        <input className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] caret-white accent-white text-white" placeholder="you name..."/>
        <input className="bg-black w-full mb-6 p-3  placeholder:text-[#eee] text-white" placeholder="your email address " required/>
        <textarea className="w-full bg-black p-3 h-[200px]  placeholder:text-[#eee] text-white" placeholder="Your message..">

        </textarea>
        <button className="font-bold mt-4 px-3 py-1.5 border-2 hover:bg-black hover:text-primary rounded-lg">SUBMIT</button>
      </form>
    </div>
  )
}
