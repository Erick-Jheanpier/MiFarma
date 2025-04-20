import { RowDataPacket } from 'mysql2';

export interface DistritoModel extends RowDataPacket {
    id_distrito:number;
    Distrito: string;
    id_provincia: number;
}