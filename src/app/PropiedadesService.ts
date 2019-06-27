import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IPropiedades } from './PropiedadesManageData';
import { Observable } from 'rxjs/';
import { PropiedadesManage } from './propiedades-manage.model';
import { map } from 'rxjs/operators';
import { ModifyPropertyComponent } from './modify-property/modify-property.component';
import { PropiedadesListComponent } from './propiedades-list/propiedades-list.component';


@Injectable()
export class PropiedadesService {
    
    //private _url: string = "/assets/data/propiedades.json"
    private _Propiedades: PropiedadesManage[];
    public onArrayChanged:EventEmitter<PropiedadesManage[]> = new EventEmitter();
    public onPropertySelected:EventEmitter<PropiedadesManage> = new EventEmitter();
    public onPropertySelectedToDelete:EventEmitter<PropiedadesManage> = new EventEmitter();
    constructor(private http: HttpClient) {
        this.onPropertySelectedToDelete.subscribe((property: PropiedadesManage) => {
            this.removeProperty(property);
        });
    }
    
    //getPropiedades(): Observable<IPropiedades[]> {
    getPropiedades(): Observable<PropiedadesManage[]> {
        return this.http.get("http://demo4472350.mockable.io/properties").pipe(
            map((response: any[]) => {
                //let resp: PropiedadesManage[] = [];
                
                this._Propiedades = [];
                //let property = new PropiedadesManage(response.map())
                response.forEach((property: any) => {
                    let propiedad = new PropiedadesManage(property.id,property.title,property.description,property.address,property.price);
                    this._Propiedades.push(propiedad);
                    //PropiedadesListComponent.addPropiedades(propiedad);
                });
                return this._Propiedades.slice();


                /*ALTERNATIVA MAS CORTA
                return response.map((property: any) => {
                    return new PropiedadesManage(property.id,property.title,property.description,property.address,property.price);
                });
                */
            })
        );
    }

    getArrayProperties(): PropiedadesManage[]{
        return this._Propiedades;
    }
    addNewProperty(newProperty: PropiedadesManage):void{
            //console.log(this._PropiedadesList);
            newProperty.id = this._Propiedades.length + 1;
            this._Propiedades.push(newProperty);

            this.onArrayChanged.emit(this._Propiedades);
            //this.onPropiedadesChange.emit();
            console.log("Propiedad agregada! La cantidad de propiedades es de: " + (this._Propiedades.length));
            
    }

    removeProperty(propertyToRemove: PropiedadesManage){
        console.log("Se quiere eliminar la propiedad: " + propertyToRemove.titulo);
        console.log("Se deberia eliminar el slice: " + this._Propiedades.findIndex(p => p.id == propertyToRemove.id));
        this._Propiedades.splice(this._Propiedades.findIndex(p => p.id == propertyToRemove.id),this._Propiedades.findIndex(p => p.id == propertyToRemove.id) + 1);
        this.onArrayChanged.emit(this._Propiedades);

        /*this._Propiedades.forEach((property: any) => {
            let propiedad = new PropiedadesManage(property.id,property.title,property.description,property.address,property.price);
            this._Propiedades.push(propiedad);
            //PropiedadesListComponent.addPropiedades(propiedad);
        });*/
    }
    
}