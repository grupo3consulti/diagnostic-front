import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {authenticationGuard} from "./guards/authentication.guard";

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '', component: AppLayoutComponent,
				children: [
					{
						path: 'pages',
						loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule)
					},
					{
						path: 'diagnostic',
						loadChildren: () => import('./pages/diagnostic/diagnostic.module').then(m => m.DiagnosticModule)
					}
				]
			},
			{
				path: 'auth',
				loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)
			},
			{path: 'notfound', component: NotfoundComponent},
			{
				path: 'diagnostic',
				loadChildren: () => import('./pages/diagnostic/diagnostic.module').then(m => m.DiagnosticModule)

			},
			{path: '**', redirectTo: '/notfound'}
		], {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			onSameUrlNavigation: 'reload'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
