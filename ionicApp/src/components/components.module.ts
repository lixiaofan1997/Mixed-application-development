import { NgModule } from '@angular/core';
import { NewaComponent } from './newa/newa';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//如果需要ngif引入此模块

@NgModule({
	declarations: [NewaComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [NewaComponent]
})
export class ComponentsModule {}
