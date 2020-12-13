import { AppComponent } from './app.component';
import { materialModules } from './app.module';
import { routes } from './app.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPage } from './pages/main/main.page';
import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MainPage, LayoutComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        ...materialModules,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
