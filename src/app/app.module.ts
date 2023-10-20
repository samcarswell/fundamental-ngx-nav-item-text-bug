import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import {ContentDensityService, FundamentalNgxCoreModule, RtlService} from '@fundamental-ngx/core';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    FundamentalNgxCoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: false })
  ],
  providers: [
    RtlService,
    ContentDensityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(themingService: ThemingService) {
themingService.init();
}
}
