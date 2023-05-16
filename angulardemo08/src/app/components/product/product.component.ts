import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'] 
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }
 
  ngOnInit(): void {
  }
  goNewsContent(){
    //路由跳转
    this.router.navigate(['/newscontent/','跳转成功']);
  }
  goNews(){
    //跳转并进行get传值
    let queryParams:NavigationExtras={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'],queryParams);
  }

}
