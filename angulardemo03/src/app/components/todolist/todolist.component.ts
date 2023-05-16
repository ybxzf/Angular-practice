import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(public storage:StorageService) {
    
   }

  public keywords:string='';

  public todolist:any[]=[];

  ngOnInit(): void {
    console.log("刷新頁面觸發這個生命週期函數");
    var todolist1=this.storage.get('todolist');
    if(todolist1){
      this.todolist=todolist1;
    }
  }
  
  doAdd(e:any){
    if(e.keyCode==13){      //13表示回車
      if(!this.todolistHasKeyword(this.todolist,this.keywords)){
        this.todolist.push({
          title:this.keywords,
          status:0,       //0表示待辦事項，1表示已完成事項
        });

        this.storage.set('todolist',this.todolist);
        this.keywords='';
      }else{
        alert("數據已存在");
        this.keywords='';
      }
    }

  }
  deleteData(key:any){
    this.todolist.splice(key,1); 
    for(var i=0;i<this.todolist.length;i++){
      //console.log("status="+this.todolist[i].status);
      this.storage.set('todolist',this.todolist);
    }
  }
  todolistHasKeyword(todolist:any,keywords:any){

    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title==keywords){
        //console.log("有重複");
        return true;//有重複
      }
    }
    //console.log("值為："+keywords);
    return false;//無重複
  }

  changecheckbox(){
    console.log("事件觸發");
    this.storage.set('todolist',this.todolist);
  }

}
