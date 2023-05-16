import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public inputValue:any;
picurl="http://10.37.37.139/assets/imgs/dx_training.png";
public title:String="我是初始化title"
public list:any=[
  {
    "title":'我是新闻1',
  },{
    "title":'我是新闻2',
  },{
    "title":'我是新闻3',
  }
]
/*1.未支付
  2.已支付
  3.已发货
  4.已收货
  其他.无效
*/
public oderStatus:number=1; 

public flag:boolean=false;

public today:any=new Date();





  constructor() {}

  ngOnInit(): void {
  }
  defult(){
    this.title="我是初始化title";
    alert("已恢复默认title")
  }
  getData(){
    alert(this.title)
  }
  setData(){
    alert(this.title='我是改变后的title')
  }
  keyDown(e:any){
    console.log(e);
  }
  keyUp(e:any){
    if(e.keyCode==13){
      console.log(e.target.value);
      console.log('按了一下回车');
    }
  }



}
