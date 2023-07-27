import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
// import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as heroes a list of mock heroes`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    expect(app.heroes).toEqual(HEROES);
  });

  it('should render Heroes as header', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain('Heroes');
  });

  it('should render a hero name from mock heroes list', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.name')?.textContent).toContain(HEROES[0].name);
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
