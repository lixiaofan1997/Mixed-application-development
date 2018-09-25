import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
//import { eventNames } from 'cluster';

@Component({
  selector: 'app-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component implements OnInit {
  txt:string;
  constructor() { }
  @Output()  inputContent=new EventEmitter();
  content(e){
    if(e.keyCode==13)
    {
      this.inputContent.emit(this.txt);
      console.log("child02");
      console.log(this.txt);
      this.txt="";
    }
  }
  ngOnInit() {
  }

}
