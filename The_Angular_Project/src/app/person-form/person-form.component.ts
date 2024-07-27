import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person: Person = { userId: 1, id: 0, title: '', completed: false };
  isEdit = false;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id > 0) {
      this.isEdit = true;
      this.personService.getPerson(id).subscribe(data => {
        this.person = data;
      });
    }
  }

  save() {
    if (this.isEdit) {
      this.personService.updatePerson(this.person).subscribe(() => {
        this.router.navigate(['/persons']);
      });
    } else {
      this.personService.addPerson(this.person).subscribe(() => {
        this.router.navigate(['/persons']);
      });
    }
  }
}
