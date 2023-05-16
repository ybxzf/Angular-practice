import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';

import { UserComponent } from './user.component';//引入组件

const routes: Routes = [
  { /*
    这样配置时是在子模块的路由中配置路径时形成父子路由关系，此时子组件是挂载到子路由（user-routing）的，需要在路由中添加：
    <router-outlet></router-outlet>标签
    */
    path:'',component:UserComponent,
      children:[
        {path:'profile',component:ProfileComponent},
      ]
  },
  
  //这样配置时直接将子模块（user）中的子组件（ProfileComponent）挂载到根路由（app-routing）上了。
  {path:'address',component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
