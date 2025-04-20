
import { RowDataPacket } from 'mysql2';

export interface PersonaModel extends RowDataPacket {
    id_persona: number;
    nombres: string;
    apellidos: string;
    fecha_nac: string;
    correo: string;
    celular: string;
    id_estado_civil: number;
    id_nivel_socioeco: number;
    id_tipo_doc: number;
    codigo: string;
    fecha_registro: string;
    id_distrito: number;
    direccion: string;
}