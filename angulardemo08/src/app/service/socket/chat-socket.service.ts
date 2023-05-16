import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';
 
@Injectable()
export class ChatSocketService {
 private url = 'http://localhost:7002'; // 后台服务端口
 private socket: any;
 
 sendMessage(message: any) {
  this.socket.emit('send_msg', message);
 }
 
 getMessages(): Observable<any> {
  return new Observable(observer => {
   this.socket = io(this.url);
   this.socket.on('receive_msg', (data:any) => {
    observer.next(data);
   });
   return () => {
    this.socket.disconnect();
   }
  })
 }
}