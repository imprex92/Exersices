import { Component, OnInit } from '@angular/core';
import { Day } from './day';
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

	title1 = 'calendar';
	today = Date.now();
	days: Day[] = [
		{
			day: '2020-02-17',
			content: 'Pluggade Angular'
		},
		{
			day: '2020-02-18',
			content: 'Bästa lektionen EVER'
		},
		{
			day: '2020-02-19',
			content: 'Repetera'
		}
	]

	
	firstName: string = "";
	writtenInput: string = "Please, tell us your name below!";
	title: string = 'Angular Exersices';
	buttonText: string = "klicka på mig!";
	buttonBoolean: boolean = true;

	
	ngOnInit():void{

	}
	onKeyUp(event) {
		// console.log('key up event: ', event);
		let input = event.target;
		let value = input.value;
		this.firstName = value;
	}
	
	submitClick(){
		if(this.buttonBoolean === true){
			this.buttonBoolean = false;
			this.buttonText ="logga ut";
			console.log(this.firstName)
			this.writtenInput = this.firstName;
		}
		else{
			this.buttonBoolean = true;
			this.buttonText ="klicka på mig!";
			this.writtenInput = "Please, tell us your name below!";
			
		}
		
		
		
	}
	
	buttonToggleBoolean: boolean = true;
	onOffToggle(){
		this.buttonToggleBoolean = !this.buttonToggleBoolean
	}

	numberChange(){

	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		   duration: 2000,
		});
	 } 
}
