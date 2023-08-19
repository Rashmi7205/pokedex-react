//css import
import { Link } from 'react-router-dom'
import './Pokemon.css'
function Pokemon({id,name,image,types}) {
  const url = `/pokemon/${id}`;
  return (
        <Link className="pokemon-card"
        to={url}
        >
        <img src={image} alt="#" />
        <h3>{name}</h3>
        </Link>
   
  )
}

export default Pokemon