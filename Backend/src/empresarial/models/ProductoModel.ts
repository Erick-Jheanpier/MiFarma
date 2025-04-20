import { RowDataPacket } from 'mysql2';

export interface ProductoModel extends RowDataPacket {
    id_producto:number;
    nombre:string;
    imagen:string;
    descripcion:string;
    id_categoria:number;
    id_vendedor:number;
    precio_unitario:number;
    id_estado_producto:number;
}