import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-add",
  templateUrl: "/app/places/place-add.html",
  providers: [PlaceService]
})

/**
  * Component that allows to create a place.
  */
export class AddPlaceComponent implements OnInit {

  public place: Place;
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _routeParams: RouteParams,
    private _placeService: PlaceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.place = new Place("", "", 0, "low", "", "");
  }

  onSubmit(): void {
    this._placeService.addPlace(this.place).subscribe(
      response => {
        this._error = response.error;
        if (this._error) {
          alert("Error in server");
        }
      },
      error => {
        this._errorMessage = error.message;
        if (this._errorMessage !== null) {
          alert(this._errorMessage);
        }
      }
    );
    this._router.navigate(["Home"]);
  }

}
