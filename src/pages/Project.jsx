import { useParams } from "react-router-dom"
import {useEffect , useState} from "react"

export default function Project() {
    const {id}=useParams();
    const [project , setProject]=useState({});

    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const res = await fetch(`http://localhost:8000/projects/${id}`);
            const data = await res.json();
            console.log(data);
            setProject(data);
          }catch(error){
            console.log(error);
          }finally{
            console.log("done");
          }
        }
    
        fetchData();
      },[])
    
  return (
    <div className="w-full">
        <h1 className="text-center font-bold text-3xl">{project.title}</h1>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 mt-12">
            {project?.projectImages?.map((image,index)=><div className=" w-full flex justify-center mb-5" key={index}><img src={image} alt="photo" className="w-auto object-cover"/></div>)}
        </div>
    </div>
  )
}
