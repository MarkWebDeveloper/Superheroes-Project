export default class Character {

    constructor(name, image, alignment, race, intelligence, power) {
        this.name = name
        this.image = image
        this.alignment = alignment
        this.race = race
        this.intelligence = intelligence
        this.power = power
    }

    getName() {
        return this.name
    }

    getImage() {
        return this.image
    }

    getAlignment() {
        return this.alignment
    }

    getRace() {
        return this.race
    }

    getIntelligence() {
        return this.intelligence
    }

    getPower() {
        return this.power
    }

}

function buscarPorNombre(nombre, characters) {
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].getName() === nombre) {
            return characters[i];
        }
    }
    return null;
}