import { RowDataPacket } from 'mysql2';

export interface PaisModel extends RowDataPacket {
    id_pais: number;
    Pais: string;
}