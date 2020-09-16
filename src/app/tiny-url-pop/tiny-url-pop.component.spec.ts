import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyUrlPopComponent } from './tiny-url-pop.component';

describe('TinyUrlPopComponent', () => {
  let component: TinyUrlPopComponent;
  let fixture: ComponentFixture<TinyUrlPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyUrlPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyUrlPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
