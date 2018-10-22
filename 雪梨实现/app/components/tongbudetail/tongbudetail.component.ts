import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{filter,map}from 'rxjs/operators';
@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  flag:boolean=true;
  num1=2;
  a=new Date();
  change(event){
    this.num1=event.target.value;
  }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      console.log(data);
      this.course=data;
      // pipe(map(data=>{
      //   data.name='66666';
      //   return data;
      //   //进行格式的变化
      // })).pipe(filter(data=>{
      //   return data.id==3;
      // })).
    })
  }

}
