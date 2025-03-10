import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersListComponent } from './providers-list.component';

describe('ProvidersListComponent', () => {
  let component: ProvidersListComponent;
  let fixture: ComponentFixture<ProvidersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
