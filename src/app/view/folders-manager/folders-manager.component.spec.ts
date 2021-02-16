import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersManagerComponent } from './folders-manager.component';

describe('FoldersManagerComponent', () => {
  let component: FoldersManagerComponent;
  let fixture: ComponentFixture<FoldersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
