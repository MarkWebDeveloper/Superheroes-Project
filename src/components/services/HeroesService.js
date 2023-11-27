import Character from "../models/Character.js";

export default class CharactersService {

    characters = []

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const characters = await this.repository.getAll()
        
        characters.forEach(character => {
            const characterToAdd = new Character(character.name, character.images.lg, character.biography.alignment)
            this.characters.push(characterToAdd)
        });

        return this.characters
    }

}