import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
title = 'Age-App';
Age: any;
birthDate = false;
values: any

onKey(e:any) {
  return this.values = e.target.value;
}

calculateAge() {
  this.birthDate = !this.birthDate;
  return this.Age = 2021 - this.values;
}

}






