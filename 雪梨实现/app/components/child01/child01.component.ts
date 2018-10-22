import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Input} from '@angular/core'
@Component({
  selector: 'app-child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component implements OnInit {

  constructor() { }
  @Input() arr:string[];@Input() arr1:string[];
  @Output() delIndex=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  del(i){//从未完成到已完成抛出下标
    this.delIndex.emit(i);
    //console.log(i);
  }
  delete(n){//从已经完成回到未完成抛出下标
    this.changeIndex.emit(n);
  }
  ngOnInit() {
  }

}
