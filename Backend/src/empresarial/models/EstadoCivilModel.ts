import { RowDataPacket } from 'mysql2';

export interface EstadoCivilModel extends RowDataPacket {
    id_estado_civil:number;
    EstadoCivil: string;
}