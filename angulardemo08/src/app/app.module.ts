import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { FormsModule } from '@angular/forms';
import { ChatSocketService } from './service/socket/chat-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ProductComponent,
    NewscontentComponent,
    ProductcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NzButtonModule,
    // NzUploadModule
  ],
  providers: [ChatSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
