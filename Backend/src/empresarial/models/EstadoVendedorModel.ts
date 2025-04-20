import { RowDataPacket } from 'mysql2';

export interface EstadoVendedorModel extends RowDataPacket {
    id_EstadoVendedor: number;
    EstadoVendedor: string;
}