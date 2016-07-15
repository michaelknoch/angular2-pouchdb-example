import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Login} from './comp/login/login.comp';
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
        component: Login,
        name: 'Login'
    }
])

export class AppComponent {

    constructor(private _pouch: PouchService) {
        console.info('init');
    }


}