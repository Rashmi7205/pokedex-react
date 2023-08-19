import Pokemonlist from "../PokemonList/Pokemonlist";
import Search from "../Search/Search"

//Css import
import './Pokedex.css';

function Pokedex() {
  return (
    <div className="pokedex-wrapper">
        <div className="header">
            <h1 className="headding">Pokedex</h1>
            <Search/>
        </div>
        <div className="main-section">
            <Pokemonlist/>
        </div>
    </div>
  )
}

export default Pokedex