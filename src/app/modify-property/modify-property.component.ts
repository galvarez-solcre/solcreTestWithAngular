import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../PropiedadesService';
import { PropiedadesManage } from '../propiedades-manage.model';
import { PropiedadesListComponent } from '../propiedades-list/propiedades-list.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modify-property',
  templateUrl: './modify-property.component.html',
  styleUrls: ['./modify-property.component.css']
})
export class ModifyPropertyComponent implements OnInit {

  idRequested:number=0;
  showResult:boolean = false;

  idToModify:number = 0;
  titleToModify:string ="";
  descriptionToModify:string = "";
  addressToModify:string = "";
  priceToModify:number = 0;

  private propertySelected:PropiedadesManage;

  constructor(private _PropiedadesService: PropiedadesService,private http: HttpClient) { }

  ngOnInit() {
    this._PropiedadesService.onPropertySelected.subscribe((property: PropiedadesManage) => {
      this.onModifyData(property);
    });
  }


  onModifyData(propertyToModify : PropiedadesManage):void{
 
        this.propertySelected = propertyToModify;
        this.showResult = true;
        this.idToModify = propertyToModify.id;
        this.titleToModify = propertyToModify.titulo;
        this.descriptionToModify = propertyToModify.descripcion;
        this.addressToModify = propertyToModify.direccion;
        this.priceToModify = propertyToModify.precio;
  }
  
  saveData():void{
    this.http
          .put(
            'http://demo4472350.mockable.io/properties/' + this.idToModify,
            {
              title: this.titleToModify, 
              description: this.descriptionToModify, 
              address: this.addressToModify, 
              price: this.priceToModify
            }
          )
          .subscribe((property: any) => {
            property.title = this.titleToModify;
            property.description= this.descriptionToModify;
            property.address = this.addressToModify;
            property.price = this.priceToModify;
            this.showResult = false;
          });     
  }
}
