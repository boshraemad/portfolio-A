import Card from "./Card"
import {useEffect , useState} from "react";

export default function Projects() {
  const [projects , setProjects]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res = await fetch("http://localhost:8000/projects");
        const data = await res.json();
        console.log(data);
        setProjects(data);
      }catch(error){
        console.log(error);
      }finally{
        console.log("done");
      }
    }

    fetchData();
  },[])

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 mt-6 px-4">
      {
        projects.map((project)=><Card key={project.id} poster={project.poster} id={project.id}/>)
      }
    </div>
  )
}
