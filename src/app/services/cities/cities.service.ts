import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    getAllCities(): Observable<ICity[]> {
      return this._citiesEndpoint.getAllCities();
    }

    deleteCityById(cityId): Observable<any> {
      return this._citiesEndpoint.deleteCityById(cityId);
    }
}
