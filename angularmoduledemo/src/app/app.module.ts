import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

//手动引入自定义模块
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';

@NgModule({
  declarations: [//组件放在这
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [//模块放在这
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
