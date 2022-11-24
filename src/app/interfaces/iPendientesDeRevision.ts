import { iCiudadano } from "./iCiudadano";

export interface iPendientesRevision{
    tramites: iTramiteParticipando[];
}
export interface iTramiteParticipando{
    id_tramite: number,
    nombre: string,
    descripcion: string,
    visible: boolean,
    solicitudes: iSolicitud[]
}
export interface iSolicitud{
    id_ciudadano_tramite: number,
    ciudadano_id: number,
    tramite_id: number,
    etapa_actual: number,
    estado: number,
    fecha_inicio: string,
    comentario: string,
    fecha_etapa_actual: string,
    visible: boolean,
    ciudadano:iCiudadano;

}