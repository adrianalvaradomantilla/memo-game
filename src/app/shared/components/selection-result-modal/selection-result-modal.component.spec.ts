import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionResultModalComponent } from './selection-result-modal.component';

describe('SelectionResultModalComponent', () => {
  let component: SelectionResultModalComponent;
  let fixture: ComponentFixture<SelectionResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionResultModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
