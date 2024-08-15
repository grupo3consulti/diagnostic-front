import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
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
	}, CountryService,
		CustomerService,
		EventService,
		IconService,
		NodeService,
		PhotoService,
		ProductService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
