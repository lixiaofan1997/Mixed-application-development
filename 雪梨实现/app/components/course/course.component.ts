import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  lessonId:number;
  lessons;
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.http.get('/api/lessons').subscribe(data=>{
      this.lessons=data;
      console.log(data);
      // console.log(data.http);
    })
  }

}
export class Lesson{   //course 里是lesson
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public time:number,
      public person:number,
      public introduction:string,
      public srcs:string,
      
  ){}
}