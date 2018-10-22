import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../../services/service-local.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:ServiceLocalService) { }
  data=[];
  data1=[];
  receive(i){//将输入的值接收到数组里
    this.data.push(i);
   // console.log(111);
    this.local.set('doing',this.data);
  }
  delstr(m){//将未完成变为已完成
    this.data1.push(this.data[m]);
    this.data.splice(m,1);
    //this.local.clear();
    this.local.set('doing',this.data);
    this.local.set('fin',this.data1);
  }
  changearr(n){//将已完成变到未完成
    this.data.push(this.data1[n]);
    this.data1.splice(n,1);
    //this.local.clear();
    this.local.set('doing',this.data);
    this.local.set('fin',this.data1);
  }
  ngOnInit() {
    if(localStorage.getItem('doing')){
      console.log(localStorage.getItem('doing'));
      //console.log(typeof(localStorage.getItem('unfin')));
      this.data=localStorage.getItem('doing').split(',');
      
    }
    else{}

    if(localStorage.getItem('fin')){
      this.data1=localStorage.getItem('fin').split(',');  
    }
    else{}
    
  }

}
