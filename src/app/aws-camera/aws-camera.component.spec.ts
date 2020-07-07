import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCameraComponent } from './aws-camera.component';

describe('AwsCameraComponent', () => {
  let component: AwsCameraComponent;
  let fixture: ComponentFixture<AwsCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
