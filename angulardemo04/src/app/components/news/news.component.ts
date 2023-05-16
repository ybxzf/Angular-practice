import { Component, OnInit,ViewChild } from '@angular/core';
/*
使用angular內置ViewChild獲取dom節點
  1.在模板html的標籤給dom起名字：<div #myBox></div>
  2.在業務邏輯ts裡面引入viewChild：import { Component, OnInit,ViewChild } from '@angular/core';
  3.在業務邏輯ts的類裡面創建ViewChild：@ViewChild('myBox')myBox:any;
  4.在業務邏輯ts的類裡面調用：ngAfterViewInit()生命週期函數方法
  5.this.myBox.nativeElement.xxx獲取dom
*/
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  //獲取dom節點,相當於將‘myBox’獲取以後賦值給myBox
  @ViewChild('myBox')myBox:any;

  //獲取一個子組件header
  @ViewChild('header')header:any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {//視圖加載完成以後觸發的方法，dom已經加載完成
    //dom已經加載完成，可以獲取dom節點
    console.log(this.myBox.nativeElement.innerHTML);
    this.myBox.nativeElement.style.color='yellow';

    //調用子組件header裡面的方法
    this.header.run1();
  }
  getChildRun(){
    //調用子組件header裡面的方法
    this.header.run2();
  }


}
