
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDroneComponent } from './update-drone';

describe('UpdateDroneComponent', () => {
  let component: UpdateDroneComponent;
  let fixture: ComponentFixture<UpdateDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDroneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDroneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
