import { Component, OnInit, Injector, Injectable, EventEmitter, Output } from '@angular/core';
import { PropiedadesService } from '../PropiedadesService';
import { PropiedadesManage } from '../propiedades-manage.model';

@Component({
  selector: 'app-propiedades-list',
  templateUrl: './propiedades-list.component.html',
  styleUrls: ['./propiedades-list.component.css']
})
@Injectable()
export class PropiedadesListComponent implements OnInit {
  //@Output() public propertySelected = new EventEmitter<PropiedadesManage>();

    static addPropiedades() {
        throw new Error("Method not implemented.");
    }

  public propiedades: PropiedadesManage[] = [];

  constructor(private _PropiedadesService: PropiedadesService) { 
  }

  ngOnInit() {
    this._PropiedadesService.getPropiedades()
    //.subscribe(data => this.propiedades = data);
    .subscribe((data: PropiedadesManage[]) => { //SI EL "data: PropiedadesManage[] fuera de otro tipo, no me dejaria asignarlo a la variable global de arriba"
      this.propiedades = data
    });
    
    this._PropiedadesService.onArrayChanged.subscribe((data: PropiedadesManage[]) => {
      this.propiedades = data
    });
    //this._PropiedadesService.onPropieddadesChange.subscribe()
  }

  onSelect(selected : PropiedadesManage){
    this._PropiedadesService.onPropertySelected.emit(selected);
  }
  
}
