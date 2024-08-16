import {Component, ElementRef, OnInit} from '@angular/core';
import {LayoutService} from "./service/app.layout.service";
import {Store} from "@ngrx/store";
import {JwtPayloadUser} from "../models";
import {Observable} from "rxjs";
import {selectUser} from "../store/selectors/user.selectors";

@Component({
	selector: 'app-sidebar',
	templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
	constructor(public layoutService: LayoutService, public el: ElementRef) { }


}

