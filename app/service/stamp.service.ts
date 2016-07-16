import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Database} from "./abstractDatabase";

@Injectable()
export class StampService {

    constructor(private _db: Database) {

    }

    public newStamp(stamp: any) {
        return this._db.newStamp(stamp);
    }

    public getStamps() {
        return this._db.getDocument('stamps');
    }

}
