import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {StampList} from './comp/stampList/stampList.comp';
import {PouchService} from "./service/pouch.service";

@Component({
    moduleId: module.id,
    selector: 'dash',
    templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        component: StampList,
        name: 'StampList'
    }
])

export class AppComponent {

    constructor(private _pouch: PouchService) {

    }


}