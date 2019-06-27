import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../PropiedadesService';
import { PropiedadesManage } from '../propiedades-manage.model';
import { PropiedadesListComponent } from '../propiedades-list/propiedades-list.component';

@Component({
  selector: 'app-modify-property',
  templateUrl: './modify-property.component.html',
  styleUrls: ['./modify-property.component.css']
})
export class ModifyPropertyComponent implements OnInit {

  idRequested:number=0;
  showResult:boolean = false;

  titleToModify:string ="";
  descriptionToModify:string = "";
  addressToModify:string = "";
  priceToModify:number = 0;

  private propertySelected:PropiedadesManage;

  constructor(private _PropiedadesService: PropiedadesService) { }

  ngOnInit() {
    this._PropiedadesService.onPropertySelected.subscribe((property: PropiedadesManage) => {
      this.onModifyData(property);
    });
  }


  onModifyData(propertyToModify : PropiedadesManage):void{
 
        this.propertySelected = propertyToModify;
        this.showResult = true;
        this.titleToModify = propertyToModify.titulo;
        this.descriptionToModify = propertyToModify.descripcion;
        this.addressToModify = propertyToModify.direccion;
        this.priceToModify = propertyToModify.precio;
  }
  
  saveData():void{
    this.propertySelected.titulo = this.titleToModify;
    this.propertySelected.descripcion = this.descriptionToModify;
    this.propertySelected.direccion = this.addressToModify;
    this.propertySelected.precio = this.priceToModify;
    this.showResult = false;
  }
}
