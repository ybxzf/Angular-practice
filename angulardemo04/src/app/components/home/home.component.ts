import { Component, OnInit } from '@angular/core';
/*
使用原生JS獲取dom節點
  1.在模板html的標籤給dom起名字：<div id='box'></div>
  2.在業務邏輯ts的類裡面調用：ngAfterViewInit()生命週期函數方法
  3.let oBox:any=document.getElementById('box')獲取dom
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public expression=true;

  ngOnInit(): void {//關於生命週期和

    
    /*
    //使用了angular組件就無法獲取dom節點
    let oBox:any=document.getElementById('box');
    console.log('oBox.innerHTML');
    oBox.style.color="blue";
    */

  }
  //建議把dom操作放在這裡面
  ngAfterViewInit(): void {//視圖加載完成以後觸發的方法，dom已經加載完成
    //dom已經加載完成，可以獲取dom節點
    let oBox:any=document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color="blue";
    
  }




}
