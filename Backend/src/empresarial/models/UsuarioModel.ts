import { RowDataPacket } from 'mysql2';

export interface UsuarioModel extends RowDataPacket {
    id_usuario:number;
    passwoard: string;
    tipo_usuario: string;
    id_persona:number;
}