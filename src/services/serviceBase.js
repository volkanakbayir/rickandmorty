export default class ServiceBase {
    baseUrl = '';
    constructor(baseUrl) {
        if (!baseUrl && typeof baseUrl !== "string" && !baseUrl.trim()) {
            throw new Error('argument error baseUrl');
        }

        if (!baseUrl.endsWith("/")) {
            baseUrl = baseUrl + "/";
        }
        this.baseUrl = baseUrl;
    }

    get = async (path) => {
        const result = await fetch(this.baseUrl + path);
        return result.json();
    }
}