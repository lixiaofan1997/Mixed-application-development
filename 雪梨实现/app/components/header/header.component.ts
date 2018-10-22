import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  change(e){
    var li=document.getElementById('nav1').children;
    console.log(li);
    for(var i='1';Number(i)<5;i=String(Number(i)+1))
    {
      document.getElementById(i).style.backgroundColor="#ccc";
    }
    document.getElementById(e).style.backgroundColor="pink";
    // document.getElementById(e).style.color="#FF9966";
    
  }
  constructor() { }

  ngOnInit() {
  }

}
