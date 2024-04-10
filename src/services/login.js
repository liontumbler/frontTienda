import { serviceApiKey } from "./service.js";

export class Login {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async login(data) {
        return await serviceApiKey(
            import.meta.env.VITE_SERVER_DOMINIO, 
            import.meta.env.VITE_SERVER_LOGIN, 
            'POST', 
            import.meta.env.VITE_APIPRINCIPAL_APP, 
            data
        );
    }
}