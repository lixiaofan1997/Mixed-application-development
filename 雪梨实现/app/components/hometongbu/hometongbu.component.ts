import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hometongbu',
  templateUrl: './hometongbu.component.html',
  styleUrls: ['./hometongbu.component.css']
})
export class HometongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  joinId:number;
  joins;
  ngOnInit() {
    this.http.get('/api/joins').subscribe(data=>{
      this.joins=data;
      console.log(data);
    })
  }

}
export class Join{
  constructor(
      public id:number,
      public coursename:string,
      public image:string,
      public task:number,
      public person:number,
  ){}
}
