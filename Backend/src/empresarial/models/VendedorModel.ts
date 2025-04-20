import { RowDataPacket } from 'mysql2';

export interface VendedorModel extends RowDataPacket {
    id_vendedor: number;
    id_usuario: number;
    codigo_vendedor: string;
    fecha_ingreso: string;
    id_EstadoVendedor: number;
}