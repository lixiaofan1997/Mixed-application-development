import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from'@angular/router';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
   // this.courseId=this.router.snapshot.params['courseId'];
  //  this.router.params.subscribe((params)=>{
  //    this.courseId=params['courseId'];
  //  });
   this.http.get('/api/courses').subscribe(data=>{
     this.courses=data;
     console.log('555');
   })
  }
  go(){
    this.route.navigate(['/shequ',600],{queryParams:{id:1000}});
  }

}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number
  ){}
}
