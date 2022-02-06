import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyexistingflightComponent } from './modifyexistingflight.component';

describe('ModifyexistingflightComponent', () => {
  let component: ModifyexistingflightComponent;
  let fixture: ComponentFixture<ModifyexistingflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyexistingflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyexistingflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
