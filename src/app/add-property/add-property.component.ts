import { Component, OnInit, Injectable } from '@angular/core';
import { PropiedadesManage } from '../propiedades-manage.model';
import { PropiedadesService } from '../PropiedadesService';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})

@Injectable()
export class AddPropertyComponent implements OnInit {

  id = 0;
  title = "";
  desc = "";
  address = "";
  price = 0;
  constructor(private _PropiedadesService: PropiedadesService) { }

  ngOnInit() {
  }



  addProperty(){
    if(this.title != "" && this.desc != "" && this.address != ""){
      let propiedad = new PropiedadesManage(this.id,this.title,this.desc,this.address,this.price);
      this._PropiedadesService.addNewProperty(propiedad);
    }
  }
}
