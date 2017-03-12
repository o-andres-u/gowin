import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-edit",
  templateUrl: "/app/places/place-add.html",
  providers: [PlaceService]
})

/**
  * Component that allows to create a place.
  */
export class EditPlaceComponent implements OnInit {

  public title = "Edit place";
  public place: Place;
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _routeParams: RouteParams,
    private _placeService: PlaceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.place = new Place(
      this._routeParams.get("uuid"),
      this._routeParams.get("name"),
      parseInt(this._routeParams.get("score")),
      this._routeParams.get("low"),
      this._routeParams.get("latitude"),
      this._routeParams.get("longitude")
    );
    this.getPlace();
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

  getPlace(): void {
    let uuid = this._routeParams.get("uuid");
    this._placeService.getPlace(uuid).subscribe(
      response => {
        this.place = response.place;
        this._error = response.error;
        if(this._error || this.place[0] === undefined) {
          this._router.navigate(["Home"]);
        } else { // Fue necesario hacerlo así.
          this.place.name = this.place[0].place_name;
          this.place.score = this.place[0].place_score;
          if (this.place.score >= 0 && this.place.score <= 4) {
            this.place.classification = "low";
          } else if (this.place.score > 4 && this.place.score < 7) {
            this.place.classification = "avarage";
          } else {
            this.place.classification = "top";
          }
          this.place.latitude = this.place[0].place_latitude;
          this.place.longitude = this.place[0].place_longitude;
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
