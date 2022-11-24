import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MatricesService {
  url='https://matrices-2022.herokuapp.com';
  constructor(private http: HttpClient) { }

  //get un Equipo
  matrices(n:number){
    return this.http.get(this.url+'/'+n);
  }
}
