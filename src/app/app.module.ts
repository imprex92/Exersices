
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { ToolTipSettings } from 'src/app/toolTipSettings';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CitiesComponent } from './cities/cities.component';
import { HeaderComponent } from './cities/header/header.component';

export const myCustomTooltipDefaults: ToolTipSettings = {
  	showDelay: 500,
  	hideDelay: 500,
  	touchendHideDelay: 750,
  	position: 'right',
};

@NgModule({
	declarations: [
		AppComponent,
		StoreComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
		CitiesComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		BrowserAnimationsModule,
		MatTooltipModule,
		MatBadgeModule,
		MatSnackBarModule,
		appRoutingModule
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
	],
	
})
export class AppModule { }



// {
//		provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults
//	}