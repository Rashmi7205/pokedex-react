import { Routes,Route } from "react-router-dom";
import Pokedex from "../src/Components/Pokedex/Pokedex";
import PokemonDetails from "../src/Components/Pokemondetails/PokemonDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>

        </Routes>
    );  
}
export default CustomRoutes;