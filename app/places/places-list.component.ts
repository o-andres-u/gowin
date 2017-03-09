import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {PlaceService} from "./place.service";

@Component({
  selector: "places-list",
  templateUrl: "/app/places/places-list.html",
  providers: [PlaceService]
})

export class PlacesListComponent implements OnInit {

  private title: string = "The best places:";

  constructor(
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    console.log("places-list.component loading...");
  }

}
