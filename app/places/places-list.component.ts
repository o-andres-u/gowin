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

  private title: string = "The best places:";
  private places: Place[];
  private error: boolean;
  private errorMessage: string;

  constructor(
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    this.placeService.getPlaces().subscribe(
      result => {
        this.places = result.places;
        this.error = result.error;
        if (this.error) {
          alert("Error in server");
        }
      },
      error => {
        this.errorMessage = error.message;
        if (this.errorMessage !== null) {
          console.log(this.errorMessage);
          alert("Error in request");
        }
      }
    );
  }

}
