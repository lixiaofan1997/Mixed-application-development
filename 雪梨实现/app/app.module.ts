import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child01Component } from './components/child01/child01.component';
import { Child02Component } from './components/child02/child02.component';
import { ServiceLocalService } from './services/service-local.service';
import {RouterModule,Router}  from  '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { HometaskComponent } from './components/hometask/hometask.component';
import { HometongbuComponent } from './components/hometongbu/hometongbu.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child01Component,
    Child02Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    ShequdetailComponent,
    HometaskComponent,
    HometongbuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,HttpClientModule,
    RouterModule.forRoot([//路由从上往下匹配，通配的路径写在最下面
      {path:'home',component:HomeComponent,children:[//子路由
        //{path:'todo',component:TodolistComponent},
        {path:'',redirectTo:'hometask',pathMatch:"full"},//默认路由        
        {path:'hometask',component:HometaskComponent},
        {path:'hometongbu',component:HometongbuComponent},
        {path:'',redirectTo:'todo',pathMatch:'full'},]},    
        //子路由的重定向，跳转到首页组件时默认todolist组件显示
  // ,children:[{path:"",},{}]},//path随便起
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},      
      {path:'course',component:CourseComponent},
      {path:'course/:lessonId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:essayId',component:ShequdetailComponent},
      {path:'',redirectTo:'home',pathMatch:"full"},//默认路由
      {path:'**',component:ShequComponent},//通配符路由
    ]),
  ],
  providers: [ServiceLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
