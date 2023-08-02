import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { AppRoutingModule } from '../app-routing.module';
// import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroDetailComponent],
      imports: [FormsModule, AppRoutingModule]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as heroes a list after component initialized`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.heroes).toEqual(HEROES);
  });

  it('should render Heroes as header', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain('Heroes');
  });

  it('should render a hero id from mock heroes list', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.badge')?.textContent).toContain(HEROES[0].id);
  });

  // it('should render hero name', () => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('#name')?.textContent).toContain('Windstorm');
  // });
  // it('should render hero id', () => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('#id')?.textContent).toContain(1);
  // });
});
