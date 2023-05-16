import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  //直接返回，属于同步
  getData(){
    return"這是一個服務data";
  }
  //回調函數處理異步
   getCallbackData(cb:any){
    setTimeout(()=>{
      var username='張三--回调函数';
      cb(username);
    },1000);
  }
  //Promise處理異步
  getPromiseData(){
    return new Promise((resolve,reject)=>{//resovle表示成功的返回值，rejectb表示失败的返回值
      setTimeout(()=>{
        var username='張三--Promise'; 
        resolve(username);
      },2000);
    });
  }
  //重重重重重重重重重重
  //Rxjs處理異步,延时触发一次
  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        var username='张三--Rxjs'
        observer.next(username);
        //observer.error('失败');//失败返回error,可选
      },3000);
    })
  }
  //Rxjs處理異步,定时触发多次
  getRxjsIntervalData(){
    let count=0;
    return new Observable((observer)=>{
      setInterval(()=>{
        count++;
        var username='张三--Rxjs Interval '+count+'次';
        observer.next(username);
        //observer.error('失败');//失败返回error,可选
      },2000);
    })
  }
  //Rxjs處理異步,用map,filter工具处理
  getRxjsIntervalNum(){
    let count=0;
    return new Observable((observer)=>{
      setInterval(()=>{
        observer.next(count++);
        //observer.error('失败');//失败返回error,可选
      },2000);
    })
  }

  
}
