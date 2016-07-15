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

        return new Observable(observer => {

                this.db.get('stamps').then((doc) => {
                    doc.data.push(stamp);
                    return this.db.put(doc).then(resp => {
                        observer.next(resp);
                    });

                }).catch((err) => {

                    console.log(err);
                    if (err.status === 404) {
                        this.db.put({
                            _id: 'stamps',
                            data: [stamp]
                        }).then(resp => {
                            observer.next(resp);
                        })
                    }
                });
            }
        );
    }

    public
    getStamps() {

        return new Observable(observer => {
            this.db.get('stamps').then((doc) => {
                observer.next(doc.data);
            });
        });
    }
}


