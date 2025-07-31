import Card from "./Card"
import {useEffect , useState} from "react";
import Spinner from "./Spinner";

export default function Projects() {
  const [projects , setProjects]=useState([]);
  const [isLoading , setIsLoading]=useState(false);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/projects");
        const data = await res.json();
        setProjects(data);
      }catch(error){
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchData();
  },[])

  if(isLoading) return <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><Spinner/></div>
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-4 mt-6 mb-6 px-4">
      {
        projects.map((project)=><Card key={project.id} poster={project.poster} title={project.title} date={project.Date} id={project.id}/>)
      }
    </div>
  )
}
