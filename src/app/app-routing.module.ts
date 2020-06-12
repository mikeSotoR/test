import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard';

const routes: Routes = [
    { path: '', loadChildren: './layout/init/init.module#InitModule', canActivate: [AuthGuard] },
    { path: 'init', loadChildren: './layout/init/init.module#InitModule' },
    { path: 'employee', loadChildren: './layout/employee/employee.module#EmployeeModule' },
    { path: 'add-employee', loadChildren: './layout/employee/add-employee/add-employee.module#AddEmployeeModule' },
    { path: 'group', loadChildren: './layout/group/group.module#GroupModule' },
    { path: '**', redirectTo: 'init' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
