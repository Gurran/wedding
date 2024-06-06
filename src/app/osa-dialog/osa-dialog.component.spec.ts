import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSADialogComponent } from './osa-dialog.component';

describe('OSADialogComponent', () => {
  let component: OSADialogComponent;
  let fixture: ComponentFixture<OSADialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSADialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OSADialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
