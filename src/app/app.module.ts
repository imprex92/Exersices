
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { ToolTipSettings } from 'src/app/toolTipSettings'
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar'


export const myCustomTooltipDefaults: ToolTipSettings = {
  	showDelay: 500,
  	hideDelay: 500,
  	touchendHideDelay: 750,
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
		MatTooltipModule,
		MatBadgeModule,
		MatSnackBarModule
   ],

   	exports: [
		   	MatTooltipModule,
			MatBadgeModule,
			MatSnackBarModule
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
