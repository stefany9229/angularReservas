import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CitaCardComponent } from './cita-card/cita-card.component';
import { CitasProfessionalComponent } from './citas-professional/citas-professional.component';


@NgModule({
  declarations: [
    VerCitasComponent,
    AgendarCitaComponent,
    CitaCardComponent,
    CitasProfessionalComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ],
  exports:[
    VerCitasComponent,
    AgendarCitaComponent
  ]
})
export class CitasModule { }
