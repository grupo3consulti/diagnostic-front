import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/reducers/user.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effects/user.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
	declarations: [AppComponent, NotfoundComponent],
	imports: [
		AppRoutingModule,
		AppLayoutModule,
		BrowserModule,
		StoreModule.forRoot({user: userReducer}),
		EffectsModule.forRoot([UserEffects]),
		StoreDevtoolsModule.instrument({maxAge: 25})
	],
	providers: [{
		provide: LocationStrategy,
		useClass: PathLocationStrategy
	},],
	bootstrap: [AppComponent]
})
export class AppModule {
}
