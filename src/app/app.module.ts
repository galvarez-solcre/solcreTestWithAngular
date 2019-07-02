import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PropiedadesListComponent } from './propiedades-list/propiedades-list.component'
import { PropiedadesService } from './PropiedadesService'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ModifyPropertyComponent } from './modify-property/modify-property.component';


@NgModule({
  declarations: [
    AppComponent,
    PropiedadesListComponent,
    AddPropertyComponent,
    ModifyPropertyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PropiedadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
