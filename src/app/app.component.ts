import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<feat-colorpicker (colorChanged)="logColor($event)"></feat-colorpicker>'
})
export class AppComponent {
  logColor(color:string){
    console.log(color)
  }
 }
