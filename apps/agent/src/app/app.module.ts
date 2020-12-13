import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { runtimeChecks } from './constants/ngrx.constant';
import { LeadForm } from './forms/lead/lead.form';
import { MainPage } from './pages/main/main.page';
import { MenuPage } from './pages/menu/menu.page';
import { ArticalPage } from './pages/artical/artical.page';
import { SecurePage } from './pages/secure/secure.page';
import { MainEffects } from './store/effects/main.effects';
import { mainReducer } from './store/reducers/main.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AuthModule } from '@fmg/auth';
import { ConfigModule, environment } from '@fmg/config';
import { DomainModule } from '@fmg/domain';
import { UiModule } from '@fmg/ui';
import { UtilModule } from '@fmg/util';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const materialModules = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
];

const ngrxModules = [
  EffectsModule.forRoot([MainEffects]),
  StoreModule.forRoot({ main: mainReducer }, { runtimeChecks }),
  StoreDevtoolsModule.instrument({
    maxAge: 100,
    logOnly: environment.production,
  }),
  StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ReactiveComponentModule,
];

const components = [LayoutComponent, HeaderComponent, FooterComponent];

const forms = [LeadForm];

const pages = [MainPage, MenuPage, SecurePage, ArticalPage];

@NgModule({
  declarations: [AppComponent, ...components, ...forms, ...pages],
  imports: [
    AppRouting,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConfigModule,
    DomainModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
    UtilModule,
    YouTubePlayerModule,
    ...materialModules,
    ...ngrxModules,
  ],
  providers: [
    {
      provide: 'instrumentationKey',
      useValue: environment.apps.agent.instrumentation.key,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
