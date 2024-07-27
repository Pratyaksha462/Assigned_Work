import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(() => {
      this.loadPersons();
    });
  }
}
