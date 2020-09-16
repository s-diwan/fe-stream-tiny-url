import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsUpdateComponent } from './group-details-update.component';

describe('GroupDetailsUpdateComponent', () => {
  let component: GroupDetailsUpdateComponent;
  let fixture: ComponentFixture<GroupDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
