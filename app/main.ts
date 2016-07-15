/// <reference path="../typings/pouchDB/pouch.d.ts" />
///<reference path="../typings/browser.d.ts" />

import {AppComponent} from './app.component';
import {provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, BrowserXhr} from '@angular/http';
import {CustomBrowserXhr} from "./service/CustomBrowserXhr";

import {
    PlatformLocation,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy,
    APP_BASE_HREF }
    from '@angular/common';
import {PouchService} from "./service/pouch.service";
import {StampService} from "./service/stamp.service";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(BrowserXhr, {useClass: CustomBrowserXhr}),
    PouchService,
    StampService
]);
