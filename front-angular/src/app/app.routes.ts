import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioListComponent } from './usuario/components/usuario-list/usuario-list.component';
import { UsuarioNewComponent } from './usuario/components/usuario-new/usuario-new.component';
import { UsuarioEditComponent } from './usuario/components/usuario-edit/usuario-edit.component';

import { EmpleadosListComponent } from './empleados/empleados-list/empleados-list.component';
import { EmpleadosNewComponent } from './empleados/empleados-new/empleados-new.component';
import { EditEmpleadoComponent } from './empleados/empleados-edit/empleados-edit.component';
import { EmpleadosDetailComponent } from './empleados/empleados-detail/empleados-detail.component';
import { HomeComponent } from './home-user/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ServiciosNewComponent } from './servicios/servicios-new/servicios-new.component';
import { ServiciosListComponent } from './servicios/servicios-list/servicios-list.component';
import { ServiciosEditComponent } from './servicios/servicios-edit/servicios-edit.component';
import { DisponibilidadHorariaComponent } from './disponibilidad-horaria/disponibilidad-horaria.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'home-admin',
        component: HomeAdminComponent,
        canActivate:[AuthGuard],
        data: { expectedRole: 'admin' }
        
    },
    {
        path:'home',
        component: HomeComponent,
        canActivate:[AuthGuard],
        data: { expectedRole: 'user' }

    },
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'user',
        component: UsuarioListComponent,
        canActivate:[AuthGuard],
        data: { expectedRole: 'admin' }
    },
    {
        path:'user/create',
        component: UsuarioNewComponent,
    },
    {
        path:'user/edit/:id',
        component: UsuarioEditComponent,
    },
    {
        path:'employee',
        component: EmpleadosListComponent,
    },
    {
        path: 'employee/schedule', 
        component: DisponibilidadHorariaComponent
        
    },
    {
        path:'employee/create',
        component: EmpleadosNewComponent,
        canActivate:[AuthGuard],
        data: { expectedRole: 'admin' }

    },
    {
        path:'employee/profile',
        component: EmpleadosDetailComponent
    },
    {
        path: 'employee/edit/:id', 
        component: EditEmpleadoComponent 
    },
    {
        path:'service/create',
        component:ServiciosNewComponent
    },
    {
        path:'service',
        component: ServiciosListComponent
    },
    {
        path:'service/edit/:id',
        component: ServiciosEditComponent    
    },


];
