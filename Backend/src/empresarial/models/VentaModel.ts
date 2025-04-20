import { RowDataPacket } from 'mysql2';


export interface VentaModel extends  RowDataPacket {
    id_venta:number;
    fecha_emision: string;
    id_tipo_comprobante:number;
    id_cliente:number;
    id_vendedor:number;
    total:number;
}