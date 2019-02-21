import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageComponent } from './group-page.component';

describe('BlankPageComponent', () => {
    let component: GroupPageComponent;
    let fixture: ComponentFixture<GroupPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [GroupPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
