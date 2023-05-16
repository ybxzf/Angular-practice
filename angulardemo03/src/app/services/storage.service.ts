import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  str:any='';


  public set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));

  }
  public get(key:any){
    this.str=localStorage.getItem(key);
    return JSON.parse(this.str);
  }
  public remove(key:any){
    localStorage.removeItem(key);
  }

}
