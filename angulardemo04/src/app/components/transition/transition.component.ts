import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
})
export class TransitionComponent implements OnInit {
  constructor() {}
  public show: boolean = false; //true表示側邊欄已打開，false表示側邊欄已關閉
  data: any;
  mylist: any;

  ngOnInit(): void {}
  showAside() {
    //這裡我們用原生js獲取dom節點
    var asideDom: any = document.getElementById('aside');
    if (this.show) {
      asideDom.style.transform = 'translate(100%,0)';
      this.show = false;
    } else {
      asideDom.style.transform = 'translate(0,0)';
      this.show = true;
    }
  }
  hideAside() {
    //這裡我們用原生js獲取dom節點
    var asideDom: any = document.getElementById('aside');
    asideDom.style.transform = 'translate(100%,0)';
  }
  // 导入表格展示数据
  showExcel(e: any) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log('fileReader.result', fileReader.result);
      if (fileReader.result) {
        this.data = fileReader.result
          .toString()
          .split(/[\s]+/gm)
          .map((item, idx) => {
            return {
              id: idx + 1,
              mysn: item,
            };
          });
      }
    };
    let x = fileReader.readAsText(e.target.files[0], 'utf8');
    console.log('this.data', this.data);
  }
  // 上传表格1
  readExcel(e: any) {
    //表格导入
    const files = e.target.files;
    console.log(files);
    if (files.length <= 0) {
      //如果没有文件名
      return false;
    } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
      // this.msg.error('上传格式不正确，请上传xls或者xlsx格式');
      return false;
    }

    const fileReader = new FileReader();
    fileReader.onload = (ev: any) => {
      try {
        const data = ev.target.result;
        const workbook = XLSX.read(data, {
          type: 'binary',
        });
        const wsname = workbook.SheetNames[0]; //取第一张表
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
        console.log(ws);
        this.mylist = []; //清空接收数据
        //编辑数据
        for (var i = 0; i < ws.length; i++) {
          this.mylist.push(ws[i]);
        }
        // 此时得到的是一个内容是对象的数组需要处理
        console.log('this.mylist',this.mylist);
        return true
      } catch (e) {
        console.log('出错了');
        return false;
      }
    };
    fileReader.readAsBinaryString(files[0]);
    return
  }
  // 上传表格2
}
