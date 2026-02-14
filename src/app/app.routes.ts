import { Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { QueEs } from './page/que-es/que-es';
import { SobreMi } from './page/sobre-mi/sobre-mi';
import { YumeNikki } from './page/yume-nikki/yume-nikki';
import { Diccionario } from './page/diccionario/diccionario';

export const routes: Routes = [
    {path: '',component:Inicio},
    {path: 'que-es',component:QueEs},
    {path: 'sobre-mi',component:SobreMi},
    {path: 'yume-nikki',component:YumeNikki},
    {path: 'diccionario',component:Diccionario},

];
