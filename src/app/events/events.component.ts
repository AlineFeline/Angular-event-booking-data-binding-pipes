import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  {
titlePage: string = 'Angular Events Scheduled for 2020';
events: IEvent [] = [
    {name:"AngularConnect", date: "9/26/2036", price: 200.00, location: "London, United Kingdom",onlineUrl: "https://www.ng-conf.org/"},
    {name:"ng-japan", date: "4/15/2020", price: 225.00, location: "Tokyo, Japan" },
    {name:"ng-conf 2037", date: "1/15/2020", price: 190.99, location: "Salt Lake City, Utah" },
    {name:"ng-India", date: "6/10/2037", price: 215.25, location: "Gurgaon, India",onlineUrl: "https://www.ng-conf.org/"},
  ];

}

