import { Routes } from '@angular/router';
import {VinoListarComponent} from "./vino-listar/vino-listar.component";
import {EditarVinoComponent} from "./editar-vino/editar-vino.component";

export const routes: Routes = [
    {path: "vinos", component:VinoListarComponent},
    {path: "vinos/:id/editar", component:EditarVinoComponent},
    {path: "vinos/nuevo", component:EditarVinoComponent},
    {path: "**", redirectTo:"vinos", pathMatch:"full"}
];
