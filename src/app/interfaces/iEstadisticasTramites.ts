export interface iEstadisticasTramites{
    status: number,
    message: string,
    data: iEstadistica[]
}

export interface iEstadistica{
    id_tramite: number,
    nombre: string,
    haciendo: number,
    hecho: number,
    abandonado: number
}