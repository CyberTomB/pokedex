import Type from "./Type.js"

export default class Pokemon {

   constructor({ name, weight, height, types, id }) {
      this.name = name
      this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      this.weight = weight
      this.height = height
      //Type is an array of objects with "name" and "img" (img is a url)
      //https://www.serebii.net/pokedex-rs/type/${name}.gif
      this.type = types.map(t => new Type(t.type.name))
      this.id = id
   }

   get Template() {

   }

}


