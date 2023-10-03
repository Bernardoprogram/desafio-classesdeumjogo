class aventuradoheroi{ 
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        switch (this.tipo) {
           case "mago":
            ataque = "uma magia"
            break
           

           case "guerreiro":
            ataque = "uma espada"
            break

            case "monge":
            ataque = "uma arte marcial"
            break

            case "ninja":
            ataque = "uma shuriken"
            break;

        }

        console.log(`o ${this.tipo} atacou usando ${ataque} `)
    }
}


const mago = new aventuradoheroi("Mago", 30 ,"mago")
mago.atacar()

const guerreiro = new aventuradoheroi("Guerreiro", 25, "guerreiro")
guerreiro.atacar()

const monge = new aventuradoheroi("Monnge", 35, "monge")
monge.atacar()

const ninja = new aventuradoheroi("Ninja", 40, "ninja")
ninja.atacar()