import { RowDataPacket } from 'mysql2';

export interface DepartamentoModel extends RowDataPacket {
    id_departamento:number;
    Departamento: string;
    id_pais: number;
}