import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'news',component:NewsComponent},
{path:'product',component:ProductComponent},
{path:'newscontent/:aid',component:NewscontentComponent},
{path:'productcontent/:pid',component:ProductcontentComponent},
{path:'**',redirectTo:'home'},//表示匹配任意路由，上面都找不到时默认跳转到home组件

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
