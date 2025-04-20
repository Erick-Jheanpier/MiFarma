import { RowDataPacket } from 'mysql2';

export interface NivelSocioecoModel extends RowDataPacket {
    id_nivel_socio:number;
    NivelSocioeco: string;
}