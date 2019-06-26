import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../PropiedadesService';
import { PropiedadesManage } from '../propiedades-manage.model';

@Component({
  selector: 'app-modify-property',
  templateUrl: './modify-property.component.html',
  styleUrls: ['./modify-property.component.css']
})
export class ModifyPropertyComponent implements OnInit {

  idRequested=0;
  showResult = false;

  titleToModify ="";
  descriptionToModify = "";
  addressToModify = "";
  priceToModify = 0;

  constructor(private _PropiedadesService: PropiedadesService) { }

  ngOnInit() {
  }

  lookByID(){
    if(this.idRequested != 0){
      let propiedades: PropiedadesManage[];
      propiedades = this._PropiedadesService.getArrayProperties();
      propiedades.map((p:PropiedadesManage) => {
        if(this.idRequested == p.id){
          this.showResult = true;
          this.titleToModify = p.titulo;
          this.descriptionToModify = p.descripcion;
          this.addressToModify = p.direccion;
          this.priceToModify = p.precio;
        }
      });
    }else{
      console.log("No existe propiedad con ese ID");
    }
  }
}
