import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAppComponent } from './tabs-app.component';

describe('TabsAppComponent', () => {
  let component: TabsAppComponent;
  let fixture: ComponentFixture<TabsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
