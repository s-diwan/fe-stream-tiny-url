import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminFormComponent } from './create-admin-form.component';

describe('CreateAdminFormComponent', () => {
  let component: CreateAdminFormComponent;
  let fixture: ComponentFixture<CreateAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
