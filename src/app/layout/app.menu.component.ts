import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';

@Component({
	selector: 'app-menu',
	templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

	model: any[] = [];

	constructor(public layoutService: LayoutService) { }

	ngOnInit() {
		this.model = [
			{
				label: 'Home',
				items: [
					{label: 'dIAgnostic', icon: 'pi pi-fw pi-home', routerLink: ['/diagnostic']}
				]
			},
			{
				label: 'Pages',
				icon: 'pi pi-fw pi-briefcase',
				items: [
					{
						label: 'Clinic',
						icon: 'pi pi-fw pi-circle-off',
						routerLink: ['/pages/clinic']
					}
				]
			}
		];
	}
}
