import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodesService = {
    getAllCurrentPage: (currentPage) => axiosService.get(`${urls.episodes}?page=${currentPage}`).then(episodes => episodes.data),
    getDetailsPage: (id) => axiosService.get(`${urls.episodes}/${id}`).then(episode => episode.data),
    getEpisode: (episode) => fetch(episode).then(episode => episode.json())
}