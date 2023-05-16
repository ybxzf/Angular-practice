import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  public str:any='為什麼';

  ngOnInit(): void {
  }
  run(){
    alert('我是子組件footer的run方法');
  }

}
