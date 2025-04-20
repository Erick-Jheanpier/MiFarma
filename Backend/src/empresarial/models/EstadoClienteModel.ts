import { RowDataPacket } from 'mysql2';

export interface EstadoClienteModel extends RowDataPacket {
    id_estado_cliente:number;
    EstadoCliente: string;
}