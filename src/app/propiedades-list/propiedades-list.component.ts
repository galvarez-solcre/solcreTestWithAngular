import { Component, OnInit, Injector, Injectable } from '@angular/core';
import { PropiedadesService } from '../PropiedadesService';
import { PropiedadesManage } from '../propiedades-manage.model';

@Component({
  selector: 'app-propiedades-list',
  templateUrl: './propiedades-list.component.html',
  styleUrls: []
})
@Injectable()
export class PropiedadesListComponent implements OnInit {
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
    
    this._PropiedadesService.arrayChanged.subscribe((data: PropiedadesManage[]) => {
      this.propiedades = data
    });
    //this._PropiedadesService.onPropieddadesChange.subscribe()
  }


  
}
