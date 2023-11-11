import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
people:Array<Person> = [
  new Person(1,"Youssef"),
  new Person(2,"Shaaban"),
]
}
