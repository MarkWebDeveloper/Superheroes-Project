export default class Character {

    constructor(name, image, alignment) {
        this.name = name
        this.image = image
        this.alignment = alignment
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

}