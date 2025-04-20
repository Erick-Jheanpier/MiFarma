import { RowDataPacket } from 'mysql2';

export interface ClienteModel extends RowDataPacket {
    id_cliente:number;
    id_usuario:number;
    id_estado_cliente:number;
}