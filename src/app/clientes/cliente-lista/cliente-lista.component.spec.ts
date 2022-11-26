import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaComponent } from './cliente-lista.component';

describe('ClienteListaComponent', () => {
  let component: ClienteListaComponent;
  let fixture: ComponentFixture<ClienteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
