import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InfoTramiteService {

  constructor(private http: HttpClient) { }

  getEtapas(idTramite:number):Observable<iEtapa[]>{
    return this.http.get<iEtapa[]>(environment.urlApi+'etapa/'+idTramite);
  }

  getDocumentos(idEtapa:number):Observable<iDocumento[]>{
    return this.http.get<iDocumento[]>(environment.urlApi+'documento/etapa/'+idEtapa);
  }

  getFuncionarioById(idFuncionario: number):Observable<iFuncionario>{
    return this.http.get<iFuncionario>(environment.urlApi+'funcionario/'+idFuncionario);
  }
}
