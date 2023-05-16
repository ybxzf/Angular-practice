import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public title:string='我是新聞組件2';

  constructor() { }
  public testlist1:any=[
    {cate_id: "5ac0896ca880f20358495508"},
    {catename: "精选热菜"},
    {content: "<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>"},
    {description: "规格:500ml/瓶"},
    {img_url: "upload\\20180417\\1523969206225.jpg"},
    {is_best: "1"},
    {is_host: 1},
    {is_hot: "1"},
    {num: "10"},
    {price: "2"},
    {product_bar_code: "6921168550098"},
    {shop_id: 0},
    {sort: ""},
    {status: "1"},
    {title: "娃娃菜炖豆腐"},
    {type: "1"},
    {_id: "5ac1a22011f48140d0002955"},
  ];
  public testlist2:any=[
    {
    cate_id: "5ac0896ca880f20358495508",
    catename: "精选热菜",
    content: "<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>",
    description: "规格:500ml/瓶",
    img_url: "upload\\20180417\\1523969206225.jpg",
    is_best: "1",
    is_host: 1,
    is_hot: "1",
    num: "10",
    price: "2",
    product_bar_code: "6921168550098",
    shop_id: 0,
    sort: "",
    status: "1",
    title: "娃娃菜炖豆腐",
    type: "1",
    _id: "5ac1a22011f48140d0002955"
  },
  ];
  public userlist:any[]=[
    {
      username:'張三',
      age:20
    },{
      username:'李四',
      age:21
    },{
      username:'王五',
      age:22
    }
  ]
  
  public cars:any[]=[
    {
      cate:'寶馬',
      list:[
        {
          title:'寶馬X1',
          price:'300000',
        },{
          title:'寶馬X3',
          price:'500000',
        },{
          title:'寶馬X5',
          price:'700000',
        }
      ]
    },{
      cate:'奔馳',
      list:[
        {
          title:'奔馳A級',
          price:'200000'
        },{
          title:'奔馳B級',
          price:'300000'
        },{
          title:'奔馳C級',
          price:'400000'
        }
      ]
    }

  ]

  ngOnInit(): void {
  }
  public testlist3:any[]=[
    {
      Aname:'aaa',
      Bname:'bbb',
      Cname:'ccc'
    }
  ]
  test(){
    
    console.log("testlist3"+this.testlist3[0]['Aname']);
  }

}
