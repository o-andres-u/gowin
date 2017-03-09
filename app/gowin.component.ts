import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
  selector: "gowin-app",
  templateUrl: "app/home.html",
  directives: [ROUTER_DIRECTIVES]
})

export class GowinComponent {

  private title: string = "gowin - Find the best place to have fun!";

}
