import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';


function PokemonDetails() {
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({});
    const [isLoadding,setIsLodding] = useState(true);
    
    async function downloadPokemon() {
        setIsLodding(true);
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:data.name,
            image:data.sprites.other.dream_world.front_default,
            weight:data.weight,
            height:data.height,
            types:data.types.map((t)=>t.type.name)
        });
    }

    useEffect(() => {
        downloadPokemon();
        setIsLodding(false);        
    }, [id])
    
  return (
    <div className='pokemon-details-wrapper'>
        {
            (isLoadding)?"loading":<div>
            <h1>name:{pokemon.name}</h1>
            <img src={pokemon.image} alt="" />
           <h2> height :{pokemon.height}</h2>
           <h2>weight:{pokemon.weight}</h2> 
            <span>
            types:
                 {pokemon.types}
            </span>
            </div>
        }
       
    </div>
  )
}

export default PokemonDetails