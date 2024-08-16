import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {Observable} from "rxjs";
import {JwtPayloadUser} from "../models";
import {selectUser} from "../store/selectors/user.selectors";
import {Store} from "@ngrx/store";

@Component({
	selector: 'app-topbar',
	templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

	items!: MenuItem[];

	@ViewChild('menubutton') menuButton!: ElementRef;

	@ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

	@ViewChild('topbarmenu') menu!: ElementRef;

	constructor(public layoutService: LayoutService, private store: Store) { }

	name = localStorage.getItem('nombre');


}
