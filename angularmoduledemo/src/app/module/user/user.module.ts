import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';

import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';




@NgModule({
  declarations: [
    ProfileComponent,
    AddressComponent,
    OrderComponent,
    UserComponent
  ],
  //暴露该模块里的组件，让其他模块可以使用
  exports:[UserComponent],

  //定义服务
  providers: [CommonService],

  imports: [
    CommonModule,
  ]
})
export class UserModule { }
