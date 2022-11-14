import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTramite } from 'src/app/interfaces/iTramite';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  constructor(private http: HttpClient) { }

  getTramites():Observable<iTramite>{
    return this.http.get<iTramite>(environment.urlApi+'tramite/listar')
  }

}