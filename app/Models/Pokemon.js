export default class Pokemon {

    constructor({ name, weight, height, types, id }) {
        this.name = name
        this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        this.weight = Math.floor(weight * 0.2204623)
        this.height = height * 4
        //Types is an array of objects, use "type.name" to get the type names.
        this.types = types
        this.id = id
    }

    get Template() {
        let typesHTML = ""
        let height = ""
        height = `${Math.floor(this.height / 12)}' ${(this.height % 12)}"`
        this.types.forEach(t => {
            typesHTML += `
         <img class="p-1" src="https://www.serebii.net/pokedex-rs/type/${t.type.name}.gif" alt="${t.name}">`
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
                        <p>Types: ${typesHTML}
                        </p>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-success" onclick="app.myPokeApiController.addPokemon()">ADD</button>
                    </div>
                </div>`
    }
}


