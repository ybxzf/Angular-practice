import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import axios from 'axios';

/* angular get请求数据
1.在app.module.ts中引入HttpClientModule：import {HttpClientModule} from '@angular/common/http';
2.在app.module.ts中声明HttpClientModule：imports: [ HttpClientModule ]
3.在用到的ts引入 HttpClient：import {HttpClient} from "@angular/common/http";
4.在用到的ts的构造函数中声明HttpClient对象：HttpClient：constructor(public http:HttpClient) { }
5.在用到的html中监听事件,在ts中获取事件方法,调用http.get(要请求的接口)收到请求数据.subscribe()处理数据
6.进行处理。
*/
/*jsonp获取服务器数据
1.在app.module.ts中引入 ：import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
2.在app.module.ts中声明：imports: [HttpClientModule,HttpClientJsonpModule]
3.在用到的ts引入：import {HttpClient} from "@angular/common/http";
4.在用到的ts的构造函数中声明HttpClient对象：constructor(public http:HttpClient) { }
5.在用到的html中监听事件,在ts中获取事件方法,调用http.jsonp(要请求的接口)收到请求数据.subscribe()处理数据
6.进行处理。
*/

/* angular post提交数据
1.在app.module.ts中引入HttpClientModule：import {HttpClientModule} from '@angular/common/http';
2.在app.module.ts中声明HttpClientModule：imports: [ HttpClientModule]
3.在用到的ts引入 HttpClient：import {HttpClient,HttpHeaders} from "@angular/common/http";
4.在用到的ts的构造函数中声明HttpClient对象：HttpClient：constructor(public http:HttpClient) { }
5.在用到的html中监听事件,在ts中获取事件方法,调用http.post(要提交的接口数据)提交数据.subscribe()处理
*/
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public http:HttpClient,public httpService:HttpserviceService) { }
  public list:any[]=[];

  ngOnInit(): void {
  }
  //get请求服务器数据
  getData(){
    var api="http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list=response.result;
    });
  }
  //post提交数据
  doLogin(){
    //当做固定写法
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    //存在跨域
    var api='http://127.0.0.1:3000/dologin';
    this.http.post(api,{'username':'张三','age':'20'},httpOptions).subscribe((response)=>{
      console.log(response);
    });
  }
  //jsonp请求服务器数据
  getJsonpData(){
    //jsonp请求 要求服务器必须支持jsonp
    var api="http://a.itying.com/api/productlist";
    //有些事callback，有些是cb
    this.http.jsonp(api,'callback').subscribe((response)=>{
      console.log(response);
    });
  }
  //第三方模块axios获取服务器数据
  getAxiosData(){
    var api="http://a.itying.com/api/productlist";
    // this.httpService.axiosGet(api).subscribe((data:any)=>{
    //   console.log(data);
    // });
    axios.get(api).then((data)=>{
      console.log(data);
    });
  }
  

}
