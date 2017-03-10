import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-detail",
  templateUrl: "/app/places/place-detail.html",
  providers: [PlaceService]
})

/**
  * Component with the detail of a selected place.
  */
export class PlaceDetailComponent implements OnInit {

  public placeName: string;
  public place: Place;
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _routeParams: RouteParams,
    private _placeService: PlaceService
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    let uuid = this._routeParams.get("uuid");
    this._placeService.getPlace(uuid).subscribe(
      response => {
        this.place = response.place;
        this.placeName = this.place[0].place_name; // Fue necesario hacerlo así.
        this._error = response.error;
        if(this._error) {
          alert("Error in server");
        }
      },
      error => {
        this._errorMessage = error.message;
        if(this._errorMessage !== null) {
          console.log(this._errorMessage);
          alert("Error in request");
        }
      }
    );
  }

}
