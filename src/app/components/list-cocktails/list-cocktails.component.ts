import { Cocktail } from './../../models/cocktail.model';
import { CocktailsService } from './../../services/cocktails.service';
import { IFilter } from './../../interfaces/i-filter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {

  public showFilter: boolean;
  public listCocktails: Cocktail[];
  public loadCocktail: boolean;
  public filter: IFilter;
  public items: number;
  public page: number;


  constructor(private cocktailService: CocktailsService) {

    this.showFilter = false;
    this.listCocktails = [];

    this.filter = {
      searchBy: 'name',
      value: ''
    }

    this.loadCocktail = true;
    this.items = 12;
    this.page = 1;

  }

  ngOnInit(): void {

  }

  hideShowFilter() {
    this.showFilter = !this.showFilter;
  }

  filterData() {

    this.loadCocktail = false;

    this.cocktailService.getCocktailsFilter(this.filter).subscribe(cocktails => {
      console.log(cocktails);
      this.listCocktails = cocktails;
      this.loadCocktail = true;
    });

  }

}
