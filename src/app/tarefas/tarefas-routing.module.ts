import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastrar";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    }
]