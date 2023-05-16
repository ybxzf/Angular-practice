import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public domain:string='http://a.itying.com/';

  constructor(public http:HttpClient) { }
  /*传入api地址
    将 api/productlist拼接
    变为：http://a.itying.com/api/productlist
  */
  get(api:any){
    return new Promise((resolve,reject)=>{
      this.http.get(this.domain+api).subscribe((response:any)=>{
        resolve(response);
      });
    });
  }
}
