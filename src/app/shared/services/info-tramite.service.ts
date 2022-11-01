import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iDocumento } from 'src/app/interfaces/iDocumento';

@Injectable({
  providedIn: 'root'
})
export class InfoTramiteService {

  url = 'http://localhost:3001/api';
  constructor(private http: HttpClient) { }

  getEtapas(idTramite:number):Observable<iEtapa[]>{
    return this.http.get<iEtapa[]>(this.url+'/etapa/'+idTramite);
  }

  getDocumentos(idEtapa:number):Observable<iDocumento[]>{
    return this.http.get<iDocumento[]>(this.url+'/documento/'+idEtapa);
  }
}
