import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    }
]