import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { runtimeChecks } from './constants/ngrx.constant';
import { LeadForm } from './forms/lead/lead.form';
import { MainPage } from './pages/main/main.page';
import { LeadPage } from './pages/lead/lead.page';
import { MenuComponent } from './components/menu/menu.component';
import { ArticlesPage } from './pages/articles/articles.page';
import { MainEffects } from './store/effects/main.effects';
import { mainReducer } from './store/reducers/main.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ArticleComponent } from './components/article/article.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleForm } from './forms/article/article.form';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

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
  TextFieldModule,
  MatDialogModule,
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

const components = [
  ArticleComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  ModalComponent,
];

const thirdParties = [
  MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
  RecaptchaModule,
  RecaptchaFormsModule,
];

const forms = [ArticleForm, LeadForm];

const pages = [MainPage, LeadPage, ArticlesPage];

@NgModule({
  declarations: [AppComponent, ...components, ...forms, ...pages],
  imports: [
    AppRouting,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigModule,
    DomainModule,
    FlexLayoutModule,
    HttpClientModule,
    UiModule,
    UtilModule,
    YouTubePlayerModule,
    ...materialModules,
    ...ngrxModules,
    ...thirdParties,
  ],
  providers: [
    {
      provide: 'instrumentationKey',
      useValue: environment.apps.agent.instrumentation.key,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
