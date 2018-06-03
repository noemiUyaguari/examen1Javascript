import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ComidaComponent } from './comida/comida.component';
import {MatCheckboxModule} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { GrillasComponent } from './grillas/grillas.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { TablaComponent } from './tabla/tabla.component';
import { ClarityModule } from '@clr/angular';
import { CartaComponent } from './carta/carta.component';
import {CardModule} from 'primeng/card';
import { CarruselComponent } from './carrusel/carrusel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {DataGridModule} from 'primeng/datagrid';




@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
    GrillasComponent,
    IngredientesComponent,
    TablaComponent,
    CartaComponent,
    CarruselComponent

  ],
  imports: [

    BrowserModule,
    //NgbModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    InputTextareaModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ClarityModule,
    CardModule,
    NgbModule,
    HttpClientModule,
    DataGridModule



],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
