import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModHomeComponent } from './mod-home.component';

describe('ModHomeComponent', () => {
  let component: ModHomeComponent;
  let fixture: ComponentFixture<ModHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
