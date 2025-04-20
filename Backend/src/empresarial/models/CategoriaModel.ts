import { RowDataPacket } from 'mysql2';

export interface CategoriaModel extends RowDataPacket {
    id_categoria:number;
    Categoria: string;
}