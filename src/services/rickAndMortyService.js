import ServiceBase from "./serviceBase";

class RickAndMortyService extends ServiceBase {

    async getPaged(page) {
        return await this.get(`character/?page=${page}`);
    }

    async getCharacter(characterId) {
        return await this.get(`character/${characterId}`);
    }

    async getEpisodes(episodeIds) {
        return await this.get(`episode/${episodeIds.join(',')}`).then(episodes => {
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