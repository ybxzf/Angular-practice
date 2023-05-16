import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import{map,filter} from 'rxjs/operators';//rxjs内置的map，filter方法必须引入后才能使用

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit(): void {
    //1.同步方法获取数据
    let data=this.request.getData();
    console.log(data);

    //2.callback获取异步方法的数据
    let callbackData=this.request.getCallbackData((data:any)=>{
      console.log(data);
    });

    //3.promise获取获取异步方法的数据,不可以中途撤回,不可以多次订阅
    var promiseDate=this.request.getPromiseData();
    promiseDate.then((data)=>{
      console.log(data);
    });

    //4.重点：Rxjs获取异步方法的数据,可以中途撤回,可以多次订阅,可以用工具处理返回的数据
      /*
      1.在service服务中引入Observable：import { Observable } from 'rxjs';
        1.1 在app.modules.ts中引入RequestService：import { RequestService } from './services/request.service';
        1.2 在app.modules.ts中配置RequestService：providers: [RequestService],
        1.3 在需要获取数据的ts中引入RequestService：import { RequestService } from 'src/app/services/request.service';
        1.4 在需要获取数据的ts的构造器中获取RequestService对象：constructor(public request:RequestService) {}
      2.在service服务中创建异步方法(自定义方法名)getRxjsData(){};
      3.在getRxjsData()方法中返回Observable对象,名称自定义，一般为observer;
      4.调用observer.next(需要处理的数据)方法发送异步数据
      5.在需要获取数据的ts中调用rxjs异步方法：var rxjsData=this.request.getRxjsData();
      6.调用该对象的subscribe方法打印即可：rxjsData.subscribe(处理结果);
      撤回操作：
      1.在需要获取数据的ts中调用rxjs异步方法：var stream=this.request.getRxjsData();
      2.调用stream.subscribe(处理结果)方法并将返回值赋给新值(自定义名称)d;
      3.调用d.unsubscribe()方法即可取消订阅
      多次订阅：
      1.可在service服务中的异步方法(自定义方法名)getRxjsIntervalData()中设置定时器(间隔几秒再次调用);
      2.方法中返回Observable对象,名称自定义，一般为observer;
      3.调用observer.next(需要处理的数据)方法发送异步数据;
      4.在需要获取数据的ts中调用rxjs异步方法:var streamInterval=this.request.getRxjsIntervalData();
      5.调用该对象的subscribe方法打印即可：streamInterval.subscribe(处理结果);
      */
     var rxjsData=this.request.getRxjsData();
     rxjsData.subscribe((data)=>{
      console.log(data);
     });

     //过1s后撤回刚才的操作
     var stream=this.request.getRxjsData();
     var d=stream.subscribe((data)=>{
      console.log(data);
     });
     setTimeout(()=>{
      d.unsubscribe();//取消订阅
    },1000);

    //Rxjs多次订阅：
    var streamInterval=this.request.getRxjsIntervalData();
    streamInterval.subscribe((data:any)=>{
      console.log(data);
    });
    //Rxjs用工具(map,filter)处理数据：
    var streamNum=this.request.getRxjsIntervalNum();
    streamNum.pipe(//管道可以多个工具一起使用，用逗号分隔
      filter((value:any)=>{
        if(value%2==0){
          return true;
        }else{
          return false;
        }
      }),
      map((value:any)=>{
        return value*value;
      })
    ).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
