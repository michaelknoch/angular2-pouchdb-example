import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class PouchService {

    private db: PouchDB;

    constructor() {
        console.info('init pouch');
        this.db = new PouchDB('trackyatime');
        this.db.info((err, resp) => {
            if (err) {
                console.error('PouchDB Error', err);
            } else {
                console.log(resp);
            }
        });
    }
}


