import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { iCrearTramiteHaciendo } from 'src/app/interfaces/post/iCrearTramiteHaciendo';
import { iPendientesRevision } from 'src/app/interfaces/iPendientesDeRevision';

@Injectable({
    providedIn: 'root'
  })
  export class FuncionarioService {
  
    constructor(private http: HttpClient) { }
  
    getPendientesRevision(idFuncionario: number): Observable<iPendientesRevision>{
      return this.http.get<iPendientesRevision>(environment.urlApi+'ciudadano-tramite/pendientes/'+idFuncionario);
    }
  

  }