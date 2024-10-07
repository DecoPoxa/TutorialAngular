import { Component } from '@angular/core';
import { ClienteApiRestService } from '../shared/cliente-api-rest.service';
import { Vino} from '../shared/app.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-vino-listar',
  standalone: true,
  imports: [],
  templateUrl: './vino-listar.component.html',
  styleUrl: './vino-listar.component.css'
})
export class VinoListarComponent implements OnInit {

}
