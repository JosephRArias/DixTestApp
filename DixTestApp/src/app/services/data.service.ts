import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Option } from '../interfaces/option';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }

  getOptions(){
    return this.http.get<Option[]>('../../assets/menu-opts.json');
  }
}
