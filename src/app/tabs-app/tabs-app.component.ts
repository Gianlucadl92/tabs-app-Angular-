import { Component } from '@angular/core';

interface Person {
  name: string;
  gender: 'male' | 'female';
}

@Component({
  selector: 'app-tabs-app',
  templateUrl: './tabs-app.component.html',
  styleUrl: './tabs-app.component.css'
})
export class TabsAppComponent {
  searchText: string = '';
  people: Person[] = [
    { name: 'Mario Rossi', gender: 'male' },
    { name: 'Luigi Bianchi', gender: 'male' },
    { name: 'Giovanni Verdi', gender: 'male' },
    { name: 'Anna Neri', gender: 'female' },
    { name: 'Maria Gialli', gender: 'female' },
    { name: 'Lucia Blu', gender: 'female' },
    { name: 'Paolo Viola', gender: 'male' },
    { name: 'Francesca Rosa', gender: 'female' },
    { name: 'Giorgio Marrone', gender: 'male' },
    { name: 'Elena Azzurri', gender: 'female' }
  ];

  filteredPeople(gender: 'all' | 'male' | 'female'): Person[] {
    return this.people.filter(person => 
      (gender === 'all' || person.gender === gender) &&
      person.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
