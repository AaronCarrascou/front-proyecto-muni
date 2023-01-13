import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { iFuncionarioPost } from 'src/app/interfaces/post/iFuncionarioPost';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCiudadano(idCiudadano:number):Observable<iCiudadano>{
    return this.http.get<iCiudadano>(environment.urlApi+'ciudadano/'+idCiudadano);
  }
  getFuncionario(idFuncionario:number):Observable<iCiudadano>{
    return this.http.get<iCiudadano>(environment.urlApi+'funcionario/'+idFuncionario);
  }
  registrarFuncionario(funcionario:iFuncionarioPost){
    return this.http.post(environment.urlApi+'login/registerFuncionario', funcionario);
  }

}
