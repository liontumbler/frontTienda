import { serviceToken } from "./service.js";

export class User {
    constructor(token) {
        this.token = token;
    }
    async crearUser(data) {
        return await serviceToken(
            import.meta.env.VITE_SERVER_DOMINIO, 
            import.meta.env.VITE_SERVER_USER, 
            'POST', 
            token, 
            data
        );
    }
}