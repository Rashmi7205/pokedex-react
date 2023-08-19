import { useEffect, useState } from "react"
import axios from 'axios';
import Pokemon from "../Pokemon/Pokemon";

function Pokemonlist() {
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoadding,setIsLodding] = useState(true);
    const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl,setNextUrl] = useState('');
    const [prevUrl,setPrevUrl] = useState('');

    const downloadPokemon = async ()=>{
        setIsLodding(true);
        const {data} = await  axios.get(pokedexUrl);
        
        setNextUrl(data.next);
        setPrevUrl(data.previous);

        const pokemonResults = data.results;
        
        const pokemonResultPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        
        const pokemonData = await axios.all(pokemonResultPromise);
        

        const res = pokemonData.map((pokeData )=>{
            const  pokemon = pokeData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny
                ,
                types:pokemon.types
                }
        });
        // console.log(res);
        setIsLodding(false);
        setPokemonList(res);
    }

    useEffect(()=>{
        downloadPokemon();
        setIsLodding(true);
    },[pokedexUrl]);

  return (
    <>
        {
            (isLoadding)?
            "Pokemon data downloading" 
            :(pokemonList)
            .map((pokemon)=><Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types}/>)
        }
        <div className="controls">
            <button 
            disabled={prevUrl===null}
            onClick={()=>setPokedexUrl(prevUrl)}
            className="btn"
            >
                prev
            </button>
            <button
                disabled={nextUrl===null}
                onClick={()=>{setPokedexUrl(nextUrl)}}
             className="btn">
                next
            </button>
        </div>
    </>
  )
}

export default Pokemonlist