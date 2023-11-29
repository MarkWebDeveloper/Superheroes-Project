import Character from "../models/character.js";

export default class CharactersService {

    characters = []

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const characters = await this.repository.getAll()
        
        characters.forEach(character => {
            const characterToAdd = new Character(character.name, character.images.lg, character.biography.alignment, character.appearance.race, character.powerstats.intelligence, character.powerstats.power)
            this.characters.push(characterToAdd)
        });

        return this.characters
    }

}