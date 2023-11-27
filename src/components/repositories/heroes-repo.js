export default class AmiiboRepository {

    uri = import.meta.env.HEROES_API_ALL

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error occured during APIs data extraction')
        }

    }

}