import { RowDataPacket } from 'mysql2';

export interface EstadoProductoModel extends RowDataPacket {
    id_estado_producto:number;
    EstadoProducto: string;
}