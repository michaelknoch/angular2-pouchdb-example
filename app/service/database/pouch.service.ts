import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Database} from "./abstractDatabase";

@Injectable()
export class PouchService extends Database {

    private db;

    constructor() {
        super();
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

    public getDocument(documentId: string) {
        return new Observable(observer => {
            this.db.get(documentId).then((doc) => {
                observer.next(doc.data);
            });
        });
    }
}


