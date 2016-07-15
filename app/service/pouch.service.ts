import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';

@Injectable()
export class PouchService {

    private db;

    constructor() {

        console.info('init pouch');
        this.db = new PouchDB('trackyatime');
        this.db.info(err => {
            if (err) {
                console.error('PouchDB Error', err);
            }
        });
    }

    public newStamp(stamp: any) {
        this.db.get('stamps').then((doc) => {
            doc.data.push(stamp);
            return this.db.put(doc);

        }).then((response) => {
            console.info(response)
        }).catch((err) => {

            console.log(err);
            if (err.status === 404) {
                this.db.put({
                    _id: 'stamps',
                    data: [stamp]
                }).then(resp => {
                    console.log(resp);
                })
            }

        });
    }

    public getStamps() {

        return new Observable(observer => {
            this.db.get('stamps').then((doc) => {
                observer.next(doc.data);
            });
        });
    }
}


