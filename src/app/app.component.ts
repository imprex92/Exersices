import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from "@angular/material/snack-bar"; // TITTA HÄR


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	// TITTA HÄR
		constructor(public snackBar: MatSnackBar) {}
		
	// TITTA HÄR
	
	ngOnInit():void{

	}
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		   duration: 2000,
		});
	 } 
}
