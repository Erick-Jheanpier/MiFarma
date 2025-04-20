import { RowDataPacket } from 'mysql2';

export interface ProvinciaModel extends RowDataPacket {
    id_provincia:number;
    Provincia: string;
    id_departamento: number;
}