import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTramite } from 'src/app/interfaces/iTramite';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iTramitesHaciendo } from 'src/app/interfaces/iTramitesHaciendo';
import { iHistorial } from 'src/app/interfaces/iHistorial';
@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  constructor(private http: HttpClient) { }

  getTramites(){
    return this.http.get(environment.urlApi+'tramite/listar')
  }

  getTramitesHaciendo(id_ciudadano:number):Observable<iTramitesHaciendo>{
    return this.http.get<iTramitesHaciendo>(environment.urlApi+'ciudadano-tramite/haciendo/'+id_ciudadano);
  }

  getHistorial(id_ciudadano:number):Observable<iHistorial>{
    return this.http.get<iHistorial>(environment.urlApi+'ciudadano/historial/'+id_ciudadano);
  }
  getNombreTramiteById(idTramite:number){
    return this.http.get(environment.urlApi+'tramite/nombreTramite/'+idTramite);
  }
}
