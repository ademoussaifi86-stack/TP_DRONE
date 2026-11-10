
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDroneComponent } from './add-drone';

describe('AddDroneComponent', () => {
  let component: AddDroneComponent;
  let fixture: ComponentFixture<AddDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDroneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDroneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
