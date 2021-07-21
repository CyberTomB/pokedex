import PokeApiController from "./Controllers/PokeApiController.js";


class App {
  pokeApiController = new PokeApiController()
}

window["app"] = new App();
