import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }
  @ViewChild('footer')footer:any;
  @ViewChild('str')str:any;

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
  }

  getChildRun(){
    this.footer.run();
  }
  getChildRun1(){
    alert(this.str.nativeElement.innerHTML);
  }

}
