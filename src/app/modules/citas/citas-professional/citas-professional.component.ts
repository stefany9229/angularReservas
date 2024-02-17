import { Component } from '@angular/core';
import { Cita } from 'src/app/models/mis-citas.model';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas-professional',
  templateUrl: './citas-professional.component.html',
  styleUrls: ['./citas-professional.component.css']
})
export class CitasProfessionalComponent {

    
  citas: Cita[] = [];
  selectedStatus?: string;

  constructor(
    private citasService: CitasService
  ){

  }
 
  ngOnInit(): void {
    this.obtenerCitas();
  }

  
  obtenerCitas(): void {
    this.citasService.getCitasProfessional().subscribe({
      next: (citas) => {
        this.citas = citas;
        console.log('Citas recibidas:', this.citas); // Aquí verás la estructura de los datos en la consola
      },
      error: (error) => console.error('Error al obtener las citas:', error),
      // Puedes manejar la finalización si es necesario
    });
  }

}
