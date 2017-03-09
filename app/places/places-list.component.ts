import {Component, OnInit} from "angular2/core";
import {Place} from "./place";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {PlaceService} from "./place.service";

@Component({
  selector: "places-list",
  templateUrl: "/app/places/places-list.html",
  providers: [PlaceService]
})

export class PlacesListComponent implements OnInit {

  public loading: any;
  private _title: string = "The best places:";
  private _places: Place[];
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.loading = 'show';
    this.getPlaces();
    this.loading = 'hide';
  }

  getPlaces() {

    this.placeService.getPlaces().subscribe(
      result => {
        this._places = result.places;
        this._error = result.error;
        if (this._error) {
          alert("Error in server");
        }
      },
      error => {
        this._errorMessage = error.message;
        if (this._errorMessage !== null) {
          console.log(this._errorMessage);
          alert("Error in request");
        }
      }
    );
  }

}
