import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Place} from "./place";
import "rxjs/add/operator/map";

@Injectable()
export class PlaceService {

  constructor(
    private http: Http
  ) {}

  getPlaces(): any {
    let req = this.http.get("http://localhost:4000/api/places");
    return req.map(res => res.json());
  }

  getPlace(uuid: string): any {
    let req = this.http.get("http://localhost:4000/api/places/" + uuid);
    return req.map(res => res.json());
  }

}
