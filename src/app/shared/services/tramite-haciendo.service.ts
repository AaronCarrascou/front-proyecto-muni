import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { iCrearTramiteHaciendo } from 'src/app/interfaces/post/iCrearTramiteHaciendo';
import { iAceptarEtapa } from 'src/app/interfaces/post/iAceptarEtapa';

@Injectable({
    providedIn: 'root'
  })
  export class TramiteHaciendoService {
  
    constructor(private http: HttpClient) { }
  
    postCrearTramiteHaciendo(crearTramiteHaciendo: iCrearTramiteHaciendo){
      return this.http.post(environment.urlApi+'ciudadano-tramite/crear', crearTramiteHaciendo);
    }

    putAceptarEtapa(aceptarEtapa:iAceptarEtapa, idTramiteHaciendo:number){
      return this.http.put(environment.urlApi+'ciudadano-tramite/actualizar/'+idTramiteHaciendo, aceptarEtapa);
    }
  
    putAbandonarTramite(idTramiteHaciendo:number){
      const data= new FormData();
      data.append('idTramiteCiudadano', idTramiteHaciendo.toString());

      return this.http.put(environment.urlApi+'ciudadano-tramite/abandonar/'+idTramiteHaciendo, data );
    }

  }