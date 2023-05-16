import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public peopleInfo:any={
    username:'',
    sex:'1',
    cityLists:['北京','上海','深圳'],
    city:'北京',
    hobby:[{
      title:'吃飯',
      checked:false
    },{
      title:'睡覺',
      checked:false
    },{
      title:'敲代碼',
      checked:true
    }],
    mark:'',
  }

  constructor() { }

  ngOnInit(): void {
  }
  duSubmit(){
    //JQuery操作獲取表單
    // let usernameDom:any=document.getElementById("username");
    // console.log(usernameDom.value);
    console.log(this.peopleInfo);
  }


}
