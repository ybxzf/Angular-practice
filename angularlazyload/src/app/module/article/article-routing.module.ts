import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ArticleComponent } from './article.component';

const routes: Routes = [

  {path:'',component:ArticleComponent}//配置路径
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
