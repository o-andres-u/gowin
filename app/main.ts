import {bootstrap} from "angular2/platform/browser";
import {GowinComponent} from "./gowin.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(GowinComponent, [ROUTER_DIRECTIVES, HTTP_PROVIDERS]);
