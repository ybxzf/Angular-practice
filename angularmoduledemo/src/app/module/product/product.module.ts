import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { PlistComponent } from './components/plist/plist.component';
import { PinfoComponent } from './components/pinfo/pinfo.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    ProductComponent,
    PlistComponent,
    PinfoComponent,
    CartComponent
  ],
  //暴露该模块里的组件，让其他模块可以使用
  exports:[ProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
