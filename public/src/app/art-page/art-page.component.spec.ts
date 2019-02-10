import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtPageComponent } from './art-page.component';

describe('ArtPageComponent', () => {
  let component: ArtPageComponent;
  let fixture: ComponentFixture<ArtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
