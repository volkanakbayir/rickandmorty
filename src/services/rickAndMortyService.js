import ServiceBase from "./serviceBase";

class RickAndMortyService extends ServiceBase {
    constructor(apiUrl) {
        super(apiUrl)
    }

    getPaged = (page) => {
        return this.get(`character/?page=${page}`);
    }

    getCharacter = (characterId) => {
        return this.get(`character/${characterId}`);
    }

    getEpisodes = (episodeIds) => {
        return this.get(`episode/${episodeIds.join(',')}`).then(episodes => {
            if (episodes instanceof Array)
                return episodes
            else if (episodes)
                return [episodes];
            else
                return null;
        });
    }
}


export default new RickAndMortyService(process.env.REACT_APP_API_URL);