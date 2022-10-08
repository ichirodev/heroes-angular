import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', stars: '1' },
      { id: 13, name: 'Bombasto', stars: '2' },
      { id: 14, name: 'Don Arturo', stars: '5' },
      { id: 15, name: 'Rey Misterio', stars: '3' },
      { id: 16, name: 'Super-man', stars: '4' },
      { id: 17, name: 'Caillou', stars: '4' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
