export interface iTramitesHaciendo{
    id_ciudadano:number,
    tramites: iTramiteHaciendo[]
}

export interface iTramiteHaciendo{
    id_tramite: number,
    nombre: string,
    descripcion: string,
    visible: boolean,
    ciudadano_tramite: iEtapaActual
}

export interface iEtapaActual{
    id_ciudadano_tramite:number,
    etapa_actual:number,
    fecha_etapa_actual:string
}