import { myPokeApiService } from "../Services/MyPokeApiService.js";

export default class MyPokeApiController {


   async addPokemon() {
      try {
         await myPokeApiService.addPokemon()
      } catch (error) {
         console.error("couldn't add that pokemon", error)
      }
   }
}