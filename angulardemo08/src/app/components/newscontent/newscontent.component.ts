import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    /** get接收
      this.route.queryParams.subscribe((data)=>{
      console.log(data);
      });
    */

    //动态路由接收
    this.route.params.subscribe((data)=>{
      console.log(data);
    });
  }

}
