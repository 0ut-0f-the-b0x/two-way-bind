import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sathish';
  variable1 : any;

  set(){
    this.variable1="default text"; 
  }
}
