import { CitiesService } from './../../services/cities/cities.service';
import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {
      this.refreshCities();
    }

    refreshCities(): void {
      this._citiesService.getAllCities().subscribe(cities => {
        this.cities = cities;
      },
      err => console.error("An error has occurred!", err));
    }

    deleteCity(cityId): void {
      this._citiesService.deleteCityById(cityId).subscribe(() => {
        this.refreshCities();
      },
      err => console.error("An error has occurred!", err));
    }
}
