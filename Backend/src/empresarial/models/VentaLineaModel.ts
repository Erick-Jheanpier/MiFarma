import { RowDataPacket } from 'mysql2';

export interface VentaLineaModel extends RowDataPacket {
    id_venta: number;
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
}