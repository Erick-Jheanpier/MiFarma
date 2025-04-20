import e from 'express';
import { RowDataPacket } from 'mysql2';

export interface TipoDocumentoModel extends RowDataPacket {
    id_tipo_doc:number;
    tipo: string
}