import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPersonaComponent } from './registropersona.component';

describe('RegistroPersonaComponent', () => {
  let component: RegistroPersonaComponent;
  let fixture: ComponentFixture<RegistroPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPersonaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
