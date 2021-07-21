import Type from "./Type.js"

export default class Pokemon {

   constructor({ name, weight, height, types, id }) {
      this.name = name
      this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      this.weight = Math.floor(weight * 0.2204623)
      this.height = height * 4
      //Type is an array of objects with "name" and "img" (img is a url)
      //https://www.serebii.net/pokedex-rs/type/${name}.gif
      this.type = types.map(t => new Type(t.type.name))
      this.id = id
   }

   get Template() {
      let types = ""
      let height = ""
      height = `${Math.floor(this.height / 12)}' ${(this.height % 12)}"`
      this.type.forEach(t => {
         types += `
         <img class="p-1" src="${t.img}" alt="${t.name}">`
      })

      return `
      <div class="bg-cerebii m-3 p-3 shadow card text-light">
                    <img src="${this.img}"
                        class="card-img-top active-pokemon-image" alt="${this.name}">
                    <div class="card-body">
                        <div class="text-center">
                            <h3>${this.name.toUpperCase()}</h3>
                        </div>
                        <p>Height: ${height}</p>
                        <p>Weight: ${this.weight.toLocaleString("en-US")} lbs</p>
                        <p>Types: ${types}
                        </p>
                    </div>
                    <div class="text-right">
                        <button>ADD</button>
                    </div>
                </div>`
   }
}


