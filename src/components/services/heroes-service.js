import Character from "../../components/models/character.js";

export default class CharatersService {

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