import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEtapa } from 'src/app/interfaces/iEtapa';

@Injectable({
  providedIn: 'root'
})
export class InfoTramiteService {

  url = 'http://localhost:3001/api';
  constructor(private http: HttpClient) { }

  getEtapas():Observable<iEtapa[]>{
    return this.http.get<iEtapa[]>(this.url+'/etapa/1')
  }
}
