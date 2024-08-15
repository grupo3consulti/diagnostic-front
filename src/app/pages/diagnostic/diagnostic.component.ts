import {Component} from '@angular/core';

@Component({
	selector: 'app-diagnostic',
	templateUrl: './diagnostic.component.html',
	styleUrl: './diagnostic.component.scss'
})
export class DiagnosticComponent {
	messages: { user: string, text: string }[] = [
		{user: 'User', text: 'Hello, how can I help you today?'},
		{user: 'User', text: 'I am having trouble with my computer.'}
	];
}
