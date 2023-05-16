import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public storage:StorageService) {
   }
 
  public keywords:string="";
  public historyList:any[]=[];

  ngOnInit(): void {
    console.log("刷新頁面觸發這個生命週期函數");
    var searchlist=this.storage.get('searchlist');
    if(searchlist){
      this.historyList=searchlist;
    }
  }
  doSearch(){
    if(this.historyList.indexOf(this.keywords)==-1){
      this.historyList.push(this.keywords);
      //console.log(this.keywords);
      this.storage.set('searchlist',this.historyList);


    }
    this.keywords='';
  }
  deleteHistory(key:any){
    //alert(key);
    this.historyList.splice(key,1);
    this.storage.set('searchlist',this.historyList);
  }

}
