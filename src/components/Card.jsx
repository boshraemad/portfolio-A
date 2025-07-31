import { Link } from "react-router-dom"
export default function Card({poster , id}) {
  return (
   <Link to={`project/${id}`} className="block border-2 rounded-lg">
         <div className="card relative h-[300px] overflow-hidden flex items-center justify-center filter grayscale hover:filter-none">
            <img src={poster} className="w-full h-auto object-cover" alt="project"/>
        </div>
   </Link>

  )
}
