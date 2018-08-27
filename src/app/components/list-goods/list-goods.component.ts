import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-goods',
    templateUrl: './list-goods.component.html',
    styleUrls: ['./list-goods.component.scss']
})
export class ListGoodsComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {

    }

}
