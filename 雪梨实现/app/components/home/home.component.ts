import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import{ HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) {   }
  course;
  headers=new HttpHeaders({});
  colorchange(e){
   
    for(var i='7';Number(i)<12;i=String(Number(i)+1))
    {
      document.getElementById(i).style.backgroundColor="white";
    }
    document.getElementById(e).style.backgroundColor="pink";
    // document.getElementById(e).style.color="#FF9966";
    
  }
  ngOnInit() {
    // this.http.get('/api/courses').subscribe((data)=>{
    //   console.log(data);//subscribe 订阅
    // })
    this.http.post('/api',{name:'lxf',pwd:'hh'},{headers:this.headers}).subscribe((data)=>{
      console.log(data);//subscribe 订阅
      console.log('lll');
    })
  }
  ngOnDestory(){//销毁

  }
}
