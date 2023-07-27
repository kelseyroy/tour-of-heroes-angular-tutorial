import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a hero with the name 'Windstorm' and id 1`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    let hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };
    expect(app.hero).toEqual(hero);
  });

  it('should render title details', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#hero')?.textContent).toContain('WINDSTORM Details');
  });

  it('should render hero name', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#name')?.textContent).toContain('Windstorm');
  });
  it('should render hero id', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#id')?.textContent).toContain(1);
  });
});
