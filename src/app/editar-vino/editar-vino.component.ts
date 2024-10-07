import { Component } from '@angular/core';
import { ClienteApiRestService } from '../shared/cliente-api-rest.service';
import { Vino } from '../shared/app.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-editar-vino',
  standalone: true,
  imports: [],
  templateUrl: './editar-vino.component.html',
  styleUrl: './editar-vino.component.css'
})
export class EditarVinoComponent {
  Vinos!: Vino[];
  mostrarMensaje!: boolean;
  mensaje!: string;
  // Inyectamos los servicios
  constructor(private clienteApiRest: ClienteApiRestService, private datos: DataService) { }
  //método ejecutado tras la construcción del componente. Es el lugar adecuado para cargar datoas
  ngOnInit() {
    console.log("Dentro funcion ngOnInit de Listar");
    // capturamos valor de mostrarMensaje. Recordar que la variable es un Observable
    this.datos.mostrarMensajeActual.subscribe(
      valor => this.mostrarMensaje = valor
    )
    console.log("Valor actual de si mostrar mensaje: " + this.mostrarMensaje);
    // capturamos el valor de mensaje
    this.datos.mensajeActual.subscribe(
      valor => this.mensaje = valor
    )
    console.log("Valor actual del mensaje: " + this.mensaje);
    // Llamamos al metodo que implementa la llamada GET, retornando el cuerpo de la respuesta
    this.clienteApiRest.getAllVinos().subscribe(
      (resp: Vino[]) => {
        console.log("datos: " + resp);
        resp.forEach(function (data) {
          console.log("Nombre Comercial: " + data.nombre_comercial);
        });
      },
      err => console.log("Error: " + err)
    );
  }
}
