import { useParams } from "react-router-dom"
import {useEffect , useState} from "react"

export default function Project() {
    const {id}=useParams();
    const [project , setProject]=useState({});

    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const res = await fetch(`https://abdullhemadportfolio.vercel.app/api/server/projects/${id}`);
            const data = await res.json();
            setProject(data);
          }catch(error){
            console.log(error);
          }finally{
            console.log("done");
          }
        }
    
        fetchData();
      },[id])
    
  return (
    <div className="w-full">
        <div className="text-center">
        <h1 className=" font-bold text-3xl">{project.title}</h1>
        <p className="font-semibold text-gray-500 mt-6">{project.details}</p>
        </div>
        <div className="w-full grid grid-cols-1 gap-2 mt-12">
            {project?.projectImages?.map((image,index)=><div className=" w-full flex justify-center mb-5" key={index}><img src={image} alt="photo" className="w-[85%] object-cover"/></div>)}
        </div>
    </div>
  )
}
