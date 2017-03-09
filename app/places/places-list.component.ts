import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
  selector: "places-list",
  templateUrl: "/app/places/places-list.html"
})

export class PlacesListComponent {

  private title: string = "The best places:";

}
