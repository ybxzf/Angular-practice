import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title:string='首頁組件的標題';
  public msg:string='我是父組件的msg';

  constructor() { }

  ngOnInit(): void {
  }
  run(){
    alert('我是父組件的run方法');
  }
  
}
