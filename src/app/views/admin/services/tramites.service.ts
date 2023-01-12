import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTramite } from 'src/app/interfaces/iTramite';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iCrearTramite } from 'src/app/interfaces/post/iCrearTramite';
import { iCrearEtapa } from 'src/app/interfaces/post/iCrearEtapa';
import { iCrearDocumento } from 'src/app/interfaces/post/iCrearDocumento';
import { iEstadisticasTramites } from 'src/app/interfaces/iEstadisticasTramites';
@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  constructor(private http: HttpClient) { }

  getTramites():Observable<iTramite>{
    return this.http.get<iTramite>(environment.urlApi+'tramite/listar')
  }
  getEstadisticasPorTramite():Observable<iEstadisticasTramites>{
    return this.http.get<iEstadisticasTramites>(environment.urlApi+'ciudadano-tramite/estadisticas/tramites');
  }

  postCrearTramite(crearTramitePost: iCrearTramite){
    return this.http.post(environment.urlApi+'tramite/crear', crearTramitePost)
  }

  postCrearEtapa(crearEtapaPost: iCrearEtapa){
    return this.http.post(environment.urlApi+'etapa/crear', crearEtapaPost)
  }

  postCrearDocumentos(crearDocumentoPost: iCrearDocumento){
    return this.http.post(environment.urlApi+'documento/crear', crearDocumentoPost)
  }

  deleteTramite(idTramite:number){
    return this.http.delete(environment.urlApi+'tramite/eliminar/'+idTramite);
  }

}