import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
import { ToolTipSettings } from 'src/app/toolTipSettings'
export const myCustomTooltipDefaults: ToolTipSettings = {
  	showDelay: 1000,
  	hideDelay: 500,
  	touchendHideDelay: 1000,
  	position: 'right',
};

@NgModule({
   	declarations: [
		AppComponent,
		StoreComponent
   ],
   imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		BrowserAnimationsModule,
		MatTooltipModule
   ],
	providers: [
		{
			provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults
		}
	],
	bootstrap: [
	AppComponent
	]
})
export class AppModule { }
