import { RowDataPacket } from 'mysql2';

export interface TipoComprobanteModel extends RowDataPacket {
    id_tipo_comprobante:number;
    TipoComprobante: string;
}