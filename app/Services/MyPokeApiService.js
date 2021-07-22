import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js";

class MyPokeApiService {
   async addPokemon() {
      const res = await sandbox.post('', ProxyState.activePokemon)
      console.log('pokemon added to sandbox: ', res.data)
      const newPokemon = new Pokemon(res.data)
      ProxyState.myPokemon = [...ProxyState.myPokemon, newPokemon]
   }
}

export const myPokeApiService = new MyPokeApiService()