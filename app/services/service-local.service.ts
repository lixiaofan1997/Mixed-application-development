import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalService {

  constructor() { }
  set(key,value){
    return localStorage.setItem(key,value);
  }
  get(key,value){
    return localStorage.getItem(key);
  }
  clear(){
    return  localStorage.clear();
  }
}
