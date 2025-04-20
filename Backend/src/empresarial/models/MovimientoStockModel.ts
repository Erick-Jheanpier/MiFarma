import { RowDataPacket } from 'mysql2';

export interface MovimientoStockModel extends RowDataPacket {
    id_movimiento: number;
    id_producto: number;
    tipo_mov: string;
    cantidad: number;
    fecha: string;
    observacion: string;
}