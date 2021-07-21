import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiService {


   async getAllPokemon() {
      let res = await pokeApi.get('?limit=151')
      ProxyState.allPokemon = res.data.results
      console.log(ProxyState.allPokemon)
   }

   async getPokemon(id) {
      let res = await pokeApi.get(id)
      console.log(res.data)
   }
}

export const pokeApiService = new PokeApiService()