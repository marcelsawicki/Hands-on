import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectExampleComponent } from './replay-subject-example.component';

describe('ReplaySubjectExampleComponent', () => {
  let component: ReplaySubjectExampleComponent;
  let fixture: ComponentFixture<ReplaySubjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplaySubjectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
