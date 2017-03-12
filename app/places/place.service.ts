import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Place} from "./place";
import "rxjs/add/operator/map";

@Injectable()
export class PlaceService {

  constructor(
    private _http: Http
  ) {}

  getPlaces(): any {
    let req = this._http.get("http://localhost:4000/api/places");
    return req.map(res => res.json());
  }

  getPlace(uuid: string): any {
    let req = this._http.get("http://localhost:4000/api/places/" + uuid);
    return req.map(res => res.json());
  }

  addPlace(place: Place): any {
    let json = JSON.stringify(place);
    let params = "json=" + json;
    let headers = new Headers(
      {"Content-Type": "application/x-www-form-urlencoded"}
    );

    let req = this._http.post("http://localhost:4000/api/places", params, {headers: headers});
    return req.map(res => res.json());
  }

}
