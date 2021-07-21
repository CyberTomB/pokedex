import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawAllPokemon() {
   const pokemon = ProxyState.allPokemon
   let template = ''
   pokemon.forEach(p =>
      template += `<li class="action" onclick="app.pokeApiController.getPokemon('${p.url}')">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</li>`)
   document.getElementById('api-pokemon').innerHTML = template
}
export default class PokeApiController {
   constructor() {
      ProxyState.on('allPokemon', _drawAllPokemon)
      this.getAllPokemon()
   }

   async getAllPokemon() {
      try {
         await pokeApiService.getAllPokemon()
      } catch (error) {
         console.error('Could not retrieve pokemon', error)
      }
   }

   async getPokemon(url) {
      let id = url.substr(33)
      console.log(id)
      try {
         await pokeApiService.getPokemon(id)
      } catch (error) {
         console.error("Couldn't get that Pokemon:", error)
      }
   }
}