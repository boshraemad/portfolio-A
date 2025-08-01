import { useParams } from "react-router-dom"
import {useEffect , useState} from "react"
import Spinner from "../components/Spinner";
import { supabase } from "../../supabase/supabase-client";

export default function Project() {
    const {id}=useParams();
    const [project , setProject]=useState({});
    const [isLoading , setIsLoading]=useState(false);

    useEffect(()=>{
        const fetchData=async()=>{
          try{
            setIsLoading(true);
            const {data, error} = await supabase.from('projects').select("*").eq("id" ,id);
            setProject(data[0]);
          }catch(error){
            console.log(error);
          }finally{
            setIsLoading(false);
          }
        }
    
        fetchData();
      },[id])
if(isLoading) return <div className="flex items-center justify-center w-full"><Spinner/></div>
  return (
    <div className="w-full">
        <div className="text-center">
        <h1 className=" font-bold lg:text-3xl text-xl">{project.title}</h1>
        <p className="font-semibold text-gray-500 mt-6">{project.details}</p>
        </div>
        <div className={`w-full grid gap-2 mt-12 ${id === "6" || id==="5" ?  "lg:grid-cols-2" : "lg:grid-cols-1"} grid-cols-1`}>
            {project?.projectImages?.map((image,index)=><div className=" w-full object-contain flex justify-center mb-5" key={index}><img src={image} alt="photo" className={`object-cover ${id === "7" ? "":"w-[85%]"}`} loading="lazy"/></div>)}
        </div>
    </div>
  )
}
