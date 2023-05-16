import { Component, OnInit } from '@angular/core';
import { ChatSocketService } from '../../service/socket/chat-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private socket: ChatSocketService) {}
  message: any = { user: 'mister', input: '' };
  messages: any = [];
  connection: any;

  ngOnInit(): void {
    // 组件初始化时创建连接并订阅信息
    this.connection = this.socket.getMessages().subscribe((message: any) => {
      console.log('收到服务器广播的信息：',message);
      this.messages.push(message);
    });
  }
  ngOnDestroy() {
    // 组件销毁取消订阅
    this.connection.unsubscribe(); 
  }
  sendMessage() {
    this.socket.sendMessage(this.message);
    this.message = { user: 'mister', input: '' };
  }
  handleChange(data:any){
    console.log(data);
    
  }
}
