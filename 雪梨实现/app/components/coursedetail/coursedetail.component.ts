import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  lessonId:number;
  lesson;
 
 
  ngOnInit() {
    this.lessonId=this.router.snapshot.params['lessonId'];
    this.http.get('/api/lessons/'+this.lessonId).subscribe(data=>{
      this.lesson=data;
      console.log(this.router.snapshot.params['lessonId']);
       console.log(this.lesson.srcs);
    })
  
  }

}
