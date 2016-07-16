import {Observable} from 'rxjs/observable';

export abstract class Database {

    public newStamp(stamp: any): Observable<any> {
        console.error('not implemented');
        return null;
    };

    public getDocument(documentId: string): Observable<any> {
        console.error('not implemented');
        return null;
    };

}
