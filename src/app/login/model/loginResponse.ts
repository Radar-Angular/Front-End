import { Usuario } from "./usuario";

export interface LoginResponse {
    usuario: Usuario,
    token: String
}

