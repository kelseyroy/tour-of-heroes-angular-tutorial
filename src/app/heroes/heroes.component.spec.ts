import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

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

  it(`should have as hero 'Tour of Heroes Angular Tutorial'`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    expect(app.hero).toEqual('Windstorm');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#hero')?.textContent).toContain('Windstorm');
  });
});
