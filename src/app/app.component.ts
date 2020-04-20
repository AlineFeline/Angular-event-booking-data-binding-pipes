/* 
Instructions:
Part A:
1. Create an events component and its template
2. The component will have two properties. 
a) titlePage, of data type string, with the following value: 'Angular Events Scheduled for 2020'
b) events, of data type any []. with the following values, an array of objects. 
  [
    {"name":"AngularConnect", date: "9/26/2036", price: 200.00, location: "London, United Kingdom",onlineUrl: "https://www.ng-conf.org/"},
    {"name":"ng-japan", date: "4/15/2020", price: 225.00, location: "Tokyo, Japan"},
    {name:"ng-conf 2037", date: "1/15/2020", price: 190.99, location: "Salt Lake City, Utah"},
    {name:"ng-India", date: "6/10/2037", price: 215.25, location: "Gurgaon, India",onlineUrl: "https://www.ng-conf.org/"},
  ]
  3. For the template
  a) display the title page
  b) Create a table with the following headings: Name, Date, Price, Location & Online. 
  4. Use ngFor to populate the necessary data-bindings (using interpolation) from the events array. 
  5. Use ngIf to display 'Available' only for those events that have an online url.

-----------------
Part B.
Once Part A is completed, continue with the following:
Pipes:
1. For title page, display the title in uppercase letters.
2. For date, display the date in the following format: June 15, 2015
3. For price, display the following currency, CAD$11.35

Event binding:
Create a button "I will be there". Upon click the following alert message should pop-up "I am happy you will be able to come!"

*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
