import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingPanelComponent } from './fishing-panel.component';

describe('FishingPanelComponent', () => {
  let component: FishingPanelComponent;
  let fixture: ComponentFixture<FishingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishingPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
