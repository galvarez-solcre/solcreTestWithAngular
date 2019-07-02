import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { PropiedadesManage } from '../propiedades-manage.model';
import { PropiedadesService } from '../PropiedadesService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})

@Injectable()
export class AddPropertyComponent implements OnInit {
  //@ViewChild('f',{static: false}) formValues: NgForm;
  formValues: FormGroup;

  id:number = 0;

  constructor(private _PropiedadesService: PropiedadesService) { }

  ngOnInit() {
    this.formValues = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'desc': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.formValues);
    let propiedad = new PropiedadesManage(this.id,this.formValues.value.title,this.formValues.value.desc,this.formValues.value.adress,this.formValues.value.price);
    this._PropiedadesService.addNewProperty(propiedad);
  }

  /*addProperty():void{
    if(this.title != "" && this.desc != "" && this.address != ""){
      let propiedad = new PropiedadesManage(this.id,this.title,this.desc,this.address,this.price);
      this._PropiedadesService.addNewProperty(propiedad);
    }
  }*/
}
