import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {PouchService} from "./pouch.service";

@Injectable()
export class StampService {

    constructor(private _pouch: PouchService) {

    }

    public newStamp(stamp: any) {
        return this._pouch.newStamp(stamp);
    }

    public getStamps() {
        return this._pouch.getDocument('stamps');
    }

}
