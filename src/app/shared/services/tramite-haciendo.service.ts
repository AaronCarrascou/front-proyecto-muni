import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { environment } from 'src/environments/environment.prod';
import { iCrearTramiteHaciendo } from 'src/app/interfaces/post/iCrearTramiteHaciendo';

@Injectable({
    providedIn: 'root'
  })
  export class TramiteHaciendoService {
  
    constructor(private http: HttpClient) { }
  
    postCrearTramiteHaciendo(crearTramiteHaciendo: iCrearTramiteHaciendo){
      return this.http.post(environment.urlApi+'ciudadano-tramite/crear', crearTramiteHaciendo);
    }
  

  }