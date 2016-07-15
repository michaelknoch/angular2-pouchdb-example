import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {StampService} from "../../service/stamp.service";

@Component({
    moduleId: module.id,
    selector: 'new-stamp',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'newStamp.html',
    styleUrls: ['newStamp.css'],
})

export class NewStamp {

    private amount: number;
    private title: string;
    private description: string;

    constructor(private _router: Router, private _stamp: StampService) {
    }

    private newStamp() {
        this._stamp.newStamp({
            amount: this.amount,
            title: this.title,
            description: this.description
        }).subscribe(resp => {
            this._router.navigate(['StampList']);
        })
    }

}
