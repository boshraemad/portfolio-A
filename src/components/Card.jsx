import { Link } from "react-router-dom"
export default function Card({title , date ,poster , id}) {
  return (
<Link to={`project/${id}`} className="block group">
  <div className="relative overflow-hidden">
    {/* Image with grayscale hover effect */}
    <img 
      src={poster} 
      className="w-full h-auto object-cover transition-all duration-300 grayscale group-hover:grayscale-0" 
      alt={title}
    />
    
    {/* Title overlay - appears on hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
      <span className="text-white text-xl font-bold p-4 text-center z-10">
        {title}<br/>{date}
      </span>
    </div>
  </div>
</Link>

  )
}
