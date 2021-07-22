import MyPokeApiController from "./Controllers/MyPokeApiController.js";
import PokeApiController from "./Controllers/PokeApiController.js";


class App {
  pokeApiController = new PokeApiController()

  myPokeApiController = new MyPokeApiController()
}

window["app"] = new App();
