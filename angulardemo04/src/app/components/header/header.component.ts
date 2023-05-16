import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  run1(){
    console.log('我是header裡面的run1方法');
  }
  run2(){
    console.log('我是header裡面的run2方法');
  }
}
