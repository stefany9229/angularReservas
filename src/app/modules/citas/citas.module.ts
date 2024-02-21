import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CitaCardComponent } from './cita-card/cita-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VerCitasComponent,
    AgendarCitaComponent,
    CitaCardComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,

  ],
  exports:[
    VerCitasComponent,
    AgendarCitaComponent
  ]
})
export class CitasModule { }
