import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;


  constructor() { }

  ngOnInit(): void {
  }
  getParentMsg(){
    alert(this.msg);
  }
  getParentRun(){
    //執行父組件的run方法
    this.home.run();
    this.run();
  }

}
