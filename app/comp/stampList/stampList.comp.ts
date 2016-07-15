import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {LocalStorage, SessionStorage} from "angular2-localstorage/dist";
import {StampService} from "../../service/stamp.service";

@Component({
    moduleId: module.id,
    templateUrl: 'stampList.html',
    styleUrls: ['stampList.css']
})

export class StampList implements OnInit {

    private stamps;

    constructor(private _router: Router, private _stamp:StampService) {
    }

    ngOnInit() {
        this._stamp.getStamps().subscribe(data => {
            this.stamps = data;
        })
    }

}
