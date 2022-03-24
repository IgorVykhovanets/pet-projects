import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const charactersService = {
    getAllEpisode: (character) => fetch(character).then(character => character.json()),
    getAll: (currentPage) => axiosService.get(`${urls.character}?page=${currentPage}`).then(characters => characters.data)
}