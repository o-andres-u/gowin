import {Component, OnInit} from "angular2/core";
import {Place} from "./place";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {PlaceService} from "./place.service";

@Component({
  selector: "places-list",
  templateUrl: "/app/places/places-list.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [PlaceService]
})

/**
 * Component that retrieves the list of the whole places.
 */
export class PlacesListComponent implements OnInit {

  public loading: string;
  public title: string = "The best places:";
  public places: Place[];
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _placeService: PlaceService
  ) { }

  ngOnInit(): void {
    this.loading = 'show';
    this.getPlaces();
    this.loading = 'hide';
  }

  getPlaces(): void {

    this._placeService.getPlaces().subscribe(
      result => {
        this.places = result.places;
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
