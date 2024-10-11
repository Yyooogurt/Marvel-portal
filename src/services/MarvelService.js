class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "";

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`);
        return res;
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}/?apikey=${this._apiKey}`);
        return res;
    };
}

export default MarvelService;
