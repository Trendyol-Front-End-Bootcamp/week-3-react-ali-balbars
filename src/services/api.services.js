import axios from "axios";

export default class APIService {
    static API_BASE_URL = "https://rickandmortyapi.com/api/character/?name=";

    static getCharactersByFilter(gender, species, aliveness) {}

    static getCharacterByName(name) {
        return axios
            .get(this.API_BASE_URL + name)
            .then((response) => response.data.results[0]);
    }
}
