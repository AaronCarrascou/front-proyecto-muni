import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTramite } from 'src/app/interfaces/iTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  url = 'http://localhost:3001/api';
  constructor(private http: HttpClient) { }

  getTramites():Observable<iTramite>{
    return this.http.get<iTramite>(this.url+'/tramite/listar')
  }

}
