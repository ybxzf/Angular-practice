import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {//配置根路由，实现路由懒加载，不需要import
//     path:'user',loadChildren:'./module/user/user.module#UserModule'
//   },
//   {//配置根路由，实现路由懒加载，不需要import
//     path:'article',loadChildren:'./module/article/article.module#ArticleModule'
//   },
//   {//配置根路由，实现路由懒加载，不需要import
//     path:'product',loadChildren:'./module/product/product.module#ProductModule'
//   },

// ];

const routes: Routes = [
  {

    path:'user',loadChildren:()=>import('./module/user/user.module').then(mod=>mod.UserModule)
  },
  {

    path:'article',loadChildren:()=>import('./module/article/article.module').then(mod=>mod.ArticleModule)
  },
  {

    path:'product',loadChildren:()=>import('./module/product/product.module').then(mod=>mod.ProductModule)
  },

  {path:'**',redirectTo:'user'}//默认加载user组件

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




