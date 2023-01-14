import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTramite } from 'src/app/interfaces/iTramite';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { iCrearTramite } from 'src/app/interfaces/post/iCrearTramite';
import { iCrearEtapa } from 'src/app/interfaces/post/iCrearEtapa';
import { iCrearDocumento } from 'src/app/interfaces/post/iCrearDocumento';
import { iEstadisticasTramites } from 'src/app/interfaces/iEstadisticasTramites';
import { iCiudadanoPost } from 'src/app/interfaces/post/iCiudadanoPost';
import { iLoginPost } from 'src/app/interfaces/post/iLoginPost';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  registrarCiudadano(ciudadano:iCiudadanoPost){
    return this.http.post(environment.urlApi+'login/registerCiudadano', ciudadano);
  }

  login(loginPost:iLoginPost){
    return this.http.post(environment.urlApi+'login/', loginPost)
  }

}