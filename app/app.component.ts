import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {StampList} from './comp/stampList/stampList.comp';
import {PouchService} from "./service/pouch.service";
import {NewStamp} from "./comp/newStamp/newStamp.comp";

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
    },
    {
        path: '/newstamp',
        component: NewStamp,
        name: 'NewStamp'
    }
])

export class AppComponent {

    constructor(private _pouch: PouchService) {

    }


}