import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      let orderedHeroes = heroes.sort((a, b) => {
        if (a.stars > b.stars) {
          return -1;
        }
        if (a.stars < b.stars) {
          return 1;
        }
        return 0;
      });
      this.heroes = orderedHeroes;
    });
  }
}
