import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }
  axiosGet(api:any){
    return new Observable((observer:any)=>{
      axios.get(api).then(function(response){
      observer(response);
      });
    });
  }
}
