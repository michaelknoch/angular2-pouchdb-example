import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {StampList} from './comp/stampList/stampList.comp';
import {PouchService} from "./service/database/pouch.service";
import {NewStamp} from "./comp/newStamp/newStamp.comp";
import {Database} from "./service/database/abstractDatabase";

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

    constructor(private _db: Database) {

    }


}